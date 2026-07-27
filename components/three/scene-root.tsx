"use client";

import { useSyncExternalStore } from "react";
import { HeroObject } from "@/components/three/hero-object";

type PointerSnapshot = [number, number];

const neutralPointer: PointerSnapshot = [0, 0];
const pointerSubscribers = new Set<() => void>();

let pointerSnapshot = neutralPointer;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
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

function getPointerSnapshot() {
  return pointerSnapshot;
}

function getServerPointerSnapshot() {
  return neutralPointer;
}

export function SceneRoot() {
  const [pointerX, pointerY] = useSyncExternalStore(
    subscribeToDocumentPointer,
    getPointerSnapshot,
    getServerPointerSnapshot,
  );

  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight intensity={0.8} position={[3, 4, 5]} />
      <HeroObject
        position={[1.25, -0.2, 0]}
        rotation={[0.08, -0.24, 0.02]}
        scale={0.82}
        targetPosition={[pointerX * 0.1, pointerY * 0.06, 0]}
        targetRotation={[pointerY * 0.07, pointerX * 0.11, -pointerX * 0.03]}
      />
    </>
  );
}
