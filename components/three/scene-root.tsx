"use client";

import { useSyncExternalStore } from "react";
import { useFrame } from "@react-three/fiber";
import { HeroObject } from "@/components/three/hero-object";

type PointerSnapshot = [number, number];

const neutralPointer: PointerSnapshot = [0, 0];
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
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

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function SceneRoot() {
  const [pointerX, pointerY] = useSyncExternalStore(
    subscribeToDocumentPointer,
    getPointerSnapshot,
    getServerPointerSnapshot,
  );
  const scrollProgress = useSyncExternalStore(
    subscribeToDocumentScroll,
    getScrollSnapshot,
    getServerScrollSnapshot,
  );
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
  const activeProgress = prefersReducedMotion ? 0 : scrollProgress;

  useFrame((state, delta) => {
    const camera = state.camera;
    const targetX = prefersReducedMotion ? 0 : activeProgress * 0.22;
    const targetY = prefersReducedMotion ? 0 : activeProgress * -0.16;
    const targetZ = prefersReducedMotion ? 4 : 4 + activeProgress * 0.55;

    if (prefersReducedMotion) {
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
        interactionEnabled={!prefersReducedMotion}
        scrollProgress={activeProgress}
        scrollTargetPosition={[-0.1, 0.14, 0.04]}
        scrollTargetRotation={[0.06, -0.1, 0.04]}
        scrollTargetScale={1.04}
        targetPosition={[pointerX * 0.1, pointerY * 0.06, 0]}
        targetRotation={[pointerY * 0.07, pointerX * 0.11, -pointerX * 0.03]}
      />
    </>
  );
}
