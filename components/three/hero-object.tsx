"use client";

import { useRef, useSyncExternalStore } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

type VectorTuple = [number, number, number];

type HeroObjectProps = {
  interactionEnabled?: boolean;
  position?: VectorTuple;
  rotation?: VectorTuple;
  scale?: number | VectorTuple;
  targetPosition?: VectorTuple;
  targetRotation?: VectorTuple;
};

const brandGold = "rgb(213, 187, 110)";
const deepNavy = "rgb(10, 16, 26)";
const neutralVector: VectorTuple = [0, 0, 0];
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const interactionDamping = 4.2;
const settleThreshold = 0.0005;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function damp(current: number, target: number, delta: number) {
  return current + (target - current) * (1 - Math.exp(-interactionDamping * delta));
}

function subscribeToReducedMotion(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function HeroObject({
  interactionEnabled = true,
  position = neutralVector,
  rotation = neutralVector,
  scale,
  targetPosition = neutralVector,
  targetRotation = neutralVector,
}: Readonly<HeroObjectProps>) {
  const groupRef = useRef<Group>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );

  useFrame((state, delta) => {
    const group = groupRef.current;

    if (!group) {
      return;
    }

    const isInteractionActive = interactionEnabled && !prefersReducedMotion;
    const positionX = position[0] + (isInteractionActive ? clamp(targetPosition[0], -0.12, 0.12) : 0);
    const positionY = position[1] + (isInteractionActive ? clamp(targetPosition[1], -0.08, 0.08) : 0);
    const positionZ = position[2] + (isInteractionActive ? clamp(targetPosition[2], -0.04, 0.04) : 0);
    const rotationX = rotation[0] + (isInteractionActive ? clamp(targetRotation[0], -0.08, 0.08) : 0);
    const rotationY = rotation[1] + (isInteractionActive ? clamp(targetRotation[1], -0.12, 0.12) : 0);
    const rotationZ = rotation[2] + (isInteractionActive ? clamp(targetRotation[2], -0.04, 0.04) : 0);

    if (!isInteractionActive) {
      group.position.set(position[0], position[1], position[2]);
      group.rotation.set(rotation[0], rotation[1], rotation[2]);
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

    const isSettled =
      Math.abs(group.position.x - positionX) < settleThreshold &&
      Math.abs(group.position.y - positionY) < settleThreshold &&
      Math.abs(group.position.z - positionZ) < settleThreshold &&
      Math.abs(group.rotation.x - rotationX) < settleThreshold &&
      Math.abs(group.rotation.y - rotationY) < settleThreshold &&
      Math.abs(group.rotation.z - rotationZ) < settleThreshold;

    if (!isSettled) {
      state.invalidate();
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <mesh rotation={[0.2, 0.35, -0.12]}>
        <dodecahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial
          color={brandGold}
          metalness={0.12}
          roughness={0.58}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.7, 0.18, Math.PI / 8]}>
        <torusGeometry args={[1.02, 0.035, 8, 40]} />
        <meshStandardMaterial
          color={deepNavy}
          metalness={0.08}
          roughness={0.52}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.15, -0.35, -Math.PI / 5]}>
        <torusGeometry args={[0.82, 0.026, 8, 36]} />
        <meshStandardMaterial color={brandGold} metalness={0.1} roughness={0.62} />
      </mesh>
      <mesh rotation={[0.2, 0, Math.PI / 2.8]} position={[0.04, -0.03, 0]}>
        <cylinderGeometry args={[0.028, 0.028, 1.72, 12]} />
        <meshStandardMaterial
          color={deepNavy}
          metalness={0.08}
          roughness={0.56}
        />
      </mesh>
    </group>
  );
}
