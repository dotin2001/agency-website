"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useFrame } from "@react-three/fiber";
import { HeroObject } from "@/components/three/hero-object";

type PointerSnapshot = [number, number];
type SceneRootProps = {
  isCoarsePointer: boolean;
  isCompactViewport: boolean;
  isPageVisible: boolean;
  prefersReducedMotion: boolean;
};

const neutralPointer: PointerSnapshot = [0, 0];
const cameraDamping = 3.2;
const settleThreshold = 0.0005;
const pointerSubscribers = new Set<() => void>();
const scrollSubscribers = new Set<() => void>();

let pointerSnapshot = neutralPointer;
let scrollProgressSnapshot = 0;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function damp(current: number, target: number, delta: number) {
  return current + (target - current) * (1 - Math.exp(-cameraDamping * delta));
}

function handleDocumentPointerMove(event: PointerEvent) {
  const width = window.innerWidth || 1;
  const height = window.innerHeight || 1;

  pointerSnapshot = [
    clamp((event.clientX / width) * 2 - 1, -1, 1),
    clamp(-((event.clientY / height) * 2 - 1), -1, 1),
  ];

  pointerSubscribers.forEach((notify) => notify());
}

function getDocumentScrollProgress() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return 0;
  }

  const documentElement = document.documentElement;
  const body = document.body;
  const documentHeight = Math.max(
    documentElement.scrollHeight,
    body?.scrollHeight ?? 0,
  );
  const maximumScroll = documentHeight - window.innerHeight;

  if (maximumScroll <= 0) {
    return 0;
  }

  return clamp(window.scrollY / maximumScroll, 0, 1);
}

function updateScrollProgress() {
  scrollProgressSnapshot = getDocumentScrollProgress();
  scrollSubscribers.forEach((notify) => notify());
}

function subscribeToDocumentPointer(onStoreChange: () => void) {
  if (typeof document === "undefined") {
    return () => {};
  }

  pointerSubscribers.add(onStoreChange);

  if (pointerSubscribers.size === 1) {
    document.addEventListener("pointermove", handleDocumentPointerMove, {
      passive: true,
    });
  }

  return () => {
    pointerSubscribers.delete(onStoreChange);

    if (pointerSubscribers.size === 0) {
      document.removeEventListener("pointermove", handleDocumentPointerMove);
    }
  };
}

function subscribeToDocumentScroll(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  scrollSubscribers.add(onStoreChange);
  scrollProgressSnapshot = getDocumentScrollProgress();

  if (scrollSubscribers.size === 1) {
    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollProgress, {
      passive: true,
    });
  }

  return () => {
    scrollSubscribers.delete(onStoreChange);

    if (scrollSubscribers.size === 0) {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    }
  };
}

function getPointerSnapshot() {
  return pointerSnapshot;
}

function getServerPointerSnapshot() {
  return neutralPointer;
}

function getScrollSnapshot() {
  return scrollProgressSnapshot;
}

function getServerScrollSnapshot() {
  return 0;
}

export function SceneRoot({
  isCoarsePointer,
  isCompactViewport,
  isPageVisible,
  prefersReducedMotion,
}: Readonly<SceneRootProps>) {
  const canTrackPointer =
    !isCoarsePointer && !prefersReducedMotion && isPageVisible;
  const canTrackScroll = !prefersReducedMotion && isPageVisible;
  const cameraIntensity = isCompactViewport ? 0.4 : 1;
  const objectIntensity = isCompactViewport ? 0.45 : 1;
  const subscribeToPointer = useCallback(
    (onStoreChange: () => void) =>
      canTrackPointer
        ? subscribeToDocumentPointer(onStoreChange)
        : () => {},
    [canTrackPointer],
  );
  const getActivePointerSnapshot = useCallback(
    () => (canTrackPointer ? getPointerSnapshot() : neutralPointer),
    [canTrackPointer],
  );
  const subscribeToScroll = useCallback(
    (onStoreChange: () => void) =>
      canTrackScroll
        ? subscribeToDocumentScroll(onStoreChange)
        : () => {},
    [canTrackScroll],
  );
  const getActiveScrollSnapshot = useCallback(
    () => (canTrackScroll ? getScrollSnapshot() : 0),
    [canTrackScroll],
  );
  const [pointerX, pointerY] = useSyncExternalStore(
    subscribeToPointer,
    getActivePointerSnapshot,
    getServerPointerSnapshot,
  );
  const scrollProgress = useSyncExternalStore(
    subscribeToScroll,
    getActiveScrollSnapshot,
    getServerScrollSnapshot,
  );
  const activeProgress = canTrackScroll ? scrollProgress : 0;
  const isMotionEnabled = canTrackScroll && isPageVisible;

  useFrame((state, delta) => {
    const camera = state.camera;
    const targetX = isMotionEnabled ? activeProgress * 0.22 * cameraIntensity : 0;
    const targetY = isMotionEnabled
      ? activeProgress * -0.16 * cameraIntensity
      : 0;
    const targetZ = isMotionEnabled
      ? 4 + activeProgress * 0.55 * cameraIntensity
      : 4;

    if (!isMotionEnabled) {
      camera.position.set(0, 0, 4);
      camera.lookAt(1.05, -0.12, 0);
      return;
    }

    const dampedDelta = Math.min(delta, 0.08);

    camera.position.set(
      damp(camera.position.x, targetX, dampedDelta),
      damp(camera.position.y, targetY, dampedDelta),
      damp(camera.position.z, targetZ, dampedDelta),
    );
    camera.lookAt(1.05, -0.12, 0);

    const isSettled =
      Math.abs(camera.position.x - targetX) < settleThreshold &&
      Math.abs(camera.position.y - targetY) < settleThreshold &&
      Math.abs(camera.position.z - targetZ) < settleThreshold;

    if (!isSettled) {
      state.invalidate();
    }
  });

  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight intensity={0.8} position={[3, 4, 5]} />
      <HeroObject
        position={[1.25, -0.2, 0]}
        rotation={[0.08, -0.24, 0.02]}
        scale={0.82}
        interactionEnabled={isMotionEnabled}
        scrollProgress={activeProgress}
        scrollTargetPosition={[
          -0.1 * objectIntensity,
          0.14 * objectIntensity,
          0.04 * objectIntensity,
        ]}
        scrollTargetRotation={[
          0.06 * objectIntensity,
          -0.1 * objectIntensity,
          0.04 * objectIntensity,
        ]}
        scrollTargetScale={1 + 0.04 * objectIntensity}
        targetPosition={[
          pointerX * 0.1 * objectIntensity,
          pointerY * 0.06 * objectIntensity,
          0,
        ]}
        targetRotation={[
          pointerY * 0.07 * objectIntensity,
          pointerX * 0.11 * objectIntensity,
          -pointerX * 0.03 * objectIntensity,
        ]}
      />
    </>
  );
}
