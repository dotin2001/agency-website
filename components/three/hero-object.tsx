"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

type VectorTuple = [number, number, number];
type PartScaleTuple = [number, number, number, number];
type PartVectorTuple = [VectorTuple, VectorTuple, VectorTuple, VectorTuple];

type HeroObjectProps = {
  interactionEnabled?: boolean;
  motionEnabled?: boolean;
  partPositions?: PartVectorTuple;
  partRotations?: PartVectorTuple;
  partScales?: PartScaleTuple;
  position?: VectorTuple;
  rotation?: VectorTuple;
  scale?: number | VectorTuple;
  scrollProgress?: number;
  scrollTargetPosition?: VectorTuple;
  scrollTargetRotation?: VectorTuple;
  scrollTargetScale?: number;
  targetPosition?: VectorTuple;
  targetRotation?: VectorTuple;
};

const brandGold = "rgb(213, 187, 110)";
const deepNavy = "rgb(10, 16, 26)";
const neutralVector: VectorTuple = [0, 0, 0];
const neutralPartVectors: PartVectorTuple = [
  neutralVector,
  neutralVector,
  neutralVector,
  neutralVector,
];
const neutralPartScales: PartScaleTuple = [1, 1, 1, 1];
const interactionDamping = 3.6;
const settleThreshold = 0.0005;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function damp(current: number, target: number, delta: number) {
  return (
    current + (target - current) * (1 - Math.exp(-interactionDamping * delta))
  );
}

export function HeroObject({
  interactionEnabled = true,
  motionEnabled = true,
  partPositions = neutralPartVectors,
  partRotations = neutralPartVectors,
  partScales = neutralPartScales,
  position = neutralVector,
  rotation = neutralVector,
  scale,
  scrollProgress = 0,
  scrollTargetPosition = neutralVector,
  scrollTargetRotation = neutralVector,
  scrollTargetScale = 1,
  targetPosition = neutralVector,
  targetRotation = neutralVector,
}: Readonly<HeroObjectProps>) {
  const groupRef = useRef<Group>(null);
  const coreGroupRef = useRef<Group>(null);
  const outerRingGroupRef = useRef<Group>(null);
  const innerRingGroupRef = useRef<Group>(null);
  const spineGroupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    const group = groupRef.current;

    if (!group) {
      return;
    }

    const baseScaleX = Array.isArray(scale) ? scale[0] : (scale ?? 1);
    const baseScaleY = Array.isArray(scale) ? scale[1] : (scale ?? 1);
    const baseScaleZ = Array.isArray(scale) ? scale[2] : (scale ?? 1);
    const progress = interactionEnabled ? clamp(scrollProgress, 0, 1) : 0;
    const scrollScale =
      1 + (clamp(scrollTargetScale, 0.96, 1.04) - 1) * progress;

    const positionX =
      position[0] +
      scrollTargetPosition[0] * progress +
      (interactionEnabled ? clamp(targetPosition[0], -0.08, 0.08) : 0);
    const positionY =
      position[1] +
      scrollTargetPosition[1] * progress +
      (interactionEnabled ? clamp(targetPosition[1], -0.05, 0.05) : 0);
    const positionZ =
      position[2] +
      scrollTargetPosition[2] * progress +
      (interactionEnabled ? clamp(targetPosition[2], -0.03, 0.03) : 0);
    const rotationX =
      rotation[0] +
      scrollTargetRotation[0] * progress +
      (interactionEnabled ? clamp(targetRotation[0], -0.05, 0.05) : 0);
    const rotationY =
      rotation[1] +
      scrollTargetRotation[1] * progress +
      (interactionEnabled ? clamp(targetRotation[1], -0.08, 0.08) : 0);
    const rotationZ =
      rotation[2] +
      scrollTargetRotation[2] * progress +
      (interactionEnabled ? clamp(targetRotation[2], -0.03, 0.03) : 0);
    const scaleX = baseScaleX * scrollScale;
    const scaleY = baseScaleY * scrollScale;
    const scaleZ = baseScaleZ * scrollScale;
    const partGroups = [
      coreGroupRef.current,
      outerRingGroupRef.current,
      innerRingGroupRef.current,
      spineGroupRef.current,
    ] as const;

    if (!motionEnabled) {
      group.position.set(position[0], position[1], position[2]);
      group.rotation.set(rotation[0], rotation[1], rotation[2]);
      group.scale.set(baseScaleX, baseScaleY, baseScaleZ);

      partGroups.forEach((partGroup, index) => {
        if (!partGroup) {
          return;
        }

        partGroup.position.set(
          partPositions[index][0],
          partPositions[index][1],
          partPositions[index][2],
        );
        partGroup.rotation.set(
          partRotations[index][0],
          partRotations[index][1],
          partRotations[index][2],
        );
        partGroup.scale.setScalar(partScales[index]);
      });

      return;
    }

    const dampedDelta = Math.min(delta, 0.08);

    group.position.set(
      damp(group.position.x, positionX, dampedDelta),
      damp(group.position.y, positionY, dampedDelta),
      damp(group.position.z, positionZ, dampedDelta),
    );
    group.rotation.set(
      damp(group.rotation.x, rotationX, dampedDelta),
      damp(group.rotation.y, rotationY, dampedDelta),
      damp(group.rotation.z, rotationZ, dampedDelta),
    );
    group.scale.set(
      damp(group.scale.x, scaleX, dampedDelta),
      damp(group.scale.y, scaleY, dampedDelta),
      damp(group.scale.z, scaleZ, dampedDelta),
    );

    let arePartsSettled = true;

    partGroups.forEach((partGroup, index) => {
      if (!partGroup) {
        return;
      }

      const targetPosition = partPositions[index];
      const targetRotation = partRotations[index];
      const targetScale = partScales[index];

      partGroup.position.set(
        damp(partGroup.position.x, targetPosition[0], dampedDelta),
        damp(partGroup.position.y, targetPosition[1], dampedDelta),
        damp(partGroup.position.z, targetPosition[2], dampedDelta),
      );
      partGroup.rotation.set(
        damp(partGroup.rotation.x, targetRotation[0], dampedDelta),
        damp(partGroup.rotation.y, targetRotation[1], dampedDelta),
        damp(partGroup.rotation.z, targetRotation[2], dampedDelta),
      );
      partGroup.scale.setScalar(
        damp(partGroup.scale.x, targetScale, dampedDelta),
      );

      const isPartSettled =
        Math.abs(partGroup.position.x - targetPosition[0]) < settleThreshold &&
        Math.abs(partGroup.position.y - targetPosition[1]) < settleThreshold &&
        Math.abs(partGroup.position.z - targetPosition[2]) < settleThreshold &&
        Math.abs(partGroup.rotation.x - targetRotation[0]) < settleThreshold &&
        Math.abs(partGroup.rotation.y - targetRotation[1]) < settleThreshold &&
        Math.abs(partGroup.rotation.z - targetRotation[2]) < settleThreshold &&
        Math.abs(partGroup.scale.x - targetScale) < settleThreshold;

      if (!isPartSettled) {
        arePartsSettled = false;
      }
    });

    const isSettled =
      Math.abs(group.position.x - positionX) < settleThreshold &&
      Math.abs(group.position.y - positionY) < settleThreshold &&
      Math.abs(group.position.z - positionZ) < settleThreshold &&
      Math.abs(group.rotation.x - rotationX) < settleThreshold &&
      Math.abs(group.rotation.y - rotationY) < settleThreshold &&
      Math.abs(group.rotation.z - rotationZ) < settleThreshold &&
      Math.abs(group.scale.x - scaleX) < settleThreshold &&
      Math.abs(group.scale.y - scaleY) < settleThreshold &&
      Math.abs(group.scale.z - scaleZ) < settleThreshold &&
      arePartsSettled;

    if (!isSettled) {
      state.invalidate();
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <group ref={coreGroupRef}>
        <mesh rotation={[0.2, 0.35, -0.12]}>
          <dodecahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial
            color={brandGold}
            metalness={0.12}
            roughness={0.58}
          />
        </mesh>
      </group>
      <group ref={outerRingGroupRef}>
        <mesh rotation={[Math.PI / 2.7, 0.18, Math.PI / 8]}>
          <torusGeometry args={[1.02, 0.035, 8, 40]} />
          <meshStandardMaterial
            color={deepNavy}
            metalness={0.08}
            roughness={0.52}
          />
        </mesh>
      </group>
      <group ref={innerRingGroupRef}>
        <mesh rotation={[Math.PI / 2.15, -0.35, -Math.PI / 5]}>
          <torusGeometry args={[0.82, 0.026, 8, 36]} />
          <meshStandardMaterial
            color={brandGold}
            metalness={0.1}
            roughness={0.62}
          />
        </mesh>
      </group>
      <group ref={spineGroupRef}>
        <mesh rotation={[0.2, 0, Math.PI / 2.8]} position={[0.04, -0.03, 0]}>
          <cylinderGeometry args={[0.028, 0.028, 1.72, 12]} />
          <meshStandardMaterial
            color={deepNavy}
            metalness={0.08}
            roughness={0.56}
          />
        </mesh>
      </group>
    </group>
  );
}
