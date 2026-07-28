"use client";

import { useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { SceneRoot } from "@/components/three/scene-root";
import { WebGLFallback } from "@/components/three/webgl-fallback";

type CapabilityProfile = {
  isCompactViewport: boolean;
  isCoarsePointer: boolean;
  isPageVisible: boolean;
  prefersReducedMotion: boolean;
  webglSupported: boolean | null;
};

const compactViewportQuery = "(max-width: 767px)";
const coarsePointerQuery = "(pointer: coarse)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const defaultCapabilityProfile: CapabilityProfile = {
  isCompactViewport: false,
  isCoarsePointer: false,
  isPageVisible: true,
  prefersReducedMotion: false,
  webglSupported: null,
};
const capabilitySubscribers = new Set<() => void>();

let capabilitySnapshot = defaultCapabilityProfile;
let webglSupportCache: boolean | null = null;

function canUseWebGL() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  if (webglSupportCache !== null) {
    return webglSupportCache;
  }

  try {
    const canvas = document.createElement("canvas");
    webglSupportCache = Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl")),
    );
  } catch {
    webglSupportCache = false;
  }

  return webglSupportCache;
}

function getClientCapabilityProfile(): CapabilityProfile {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return defaultCapabilityProfile;
  }

  return {
    isCompactViewport: window.matchMedia(compactViewportQuery).matches,
    isCoarsePointer: window.matchMedia(coarsePointerQuery).matches,
    isPageVisible: document.visibilityState === "visible",
    prefersReducedMotion: window.matchMedia(reducedMotionQuery).matches,
    webglSupported: canUseWebGL(),
  };
}

function areCapabilityProfilesEqual(
  current: CapabilityProfile,
  next: CapabilityProfile,
) {
  return (
    current.isCompactViewport === next.isCompactViewport &&
    current.isCoarsePointer === next.isCoarsePointer &&
    current.isPageVisible === next.isPageVisible &&
    current.prefersReducedMotion === next.prefersReducedMotion &&
    current.webglSupported === next.webglSupported
  );
}

function updateCapabilityProfile() {
  const nextCapabilityProfile = getClientCapabilityProfile();

  if (areCapabilityProfilesEqual(capabilitySnapshot, nextCapabilityProfile)) {
    return;
  }

  capabilitySnapshot = nextCapabilityProfile;
  capabilitySubscribers.forEach((notify) => notify());
}

function subscribeToCapabilityProfile(onStoreChange: () => void) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  capabilitySubscribers.add(onStoreChange);
  updateCapabilityProfile();

  if (capabilitySubscribers.size === 1) {
    const compactViewportMedia = window.matchMedia(compactViewportQuery);
    const coarsePointerMedia = window.matchMedia(coarsePointerQuery);
    const reducedMotionMedia = window.matchMedia(reducedMotionQuery);

    compactViewportMedia.addEventListener("change", updateCapabilityProfile);
    coarsePointerMedia.addEventListener("change", updateCapabilityProfile);
    reducedMotionMedia.addEventListener("change", updateCapabilityProfile);
    document.addEventListener("visibilitychange", updateCapabilityProfile);

    return () => {
      capabilitySubscribers.delete(onStoreChange);

      if (capabilitySubscribers.size === 0) {
        compactViewportMedia.removeEventListener(
          "change",
          updateCapabilityProfile,
        );
        coarsePointerMedia.removeEventListener(
          "change",
          updateCapabilityProfile,
        );
        reducedMotionMedia.removeEventListener(
          "change",
          updateCapabilityProfile,
        );
        document.removeEventListener("visibilitychange", updateCapabilityProfile);
      }
    };
  }

  return () => {
    capabilitySubscribers.delete(onStoreChange);
  };
}

function getCapabilitySnapshot() {
  return capabilitySnapshot;
}

function getServerCapabilitySnapshot() {
  return defaultCapabilityProfile;
}

export function PersistentCanvas() {
  const capabilityProfile = useSyncExternalStore(
    subscribeToCapabilityProfile,
    getCapabilitySnapshot,
    getServerCapabilitySnapshot,
  );
  const dpr =
    capabilityProfile.isCompactViewport ||
    capabilityProfile.isCoarsePointer ||
    capabilityProfile.prefersReducedMotion ||
    !capabilityProfile.isPageVisible
      ? 1
      : 1.25;

  if (capabilityProfile.webglSupported === null) {
    return null;
  }

  if (!capabilityProfile.webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <Canvas
        aria-hidden="true"
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={dpr}
        frameloop="demand"
        gl={{
          alpha: true,
          antialias: !(
            capabilityProfile.isCompactViewport ||
            capabilityProfile.isCoarsePointer ||
            capabilityProfile.prefersReducedMotion
          ),
          powerPreference:
            capabilityProfile.isCompactViewport ||
            capabilityProfile.isCoarsePointer ||
            capabilityProfile.prefersReducedMotion
              ? "low-power"
              : "high-performance",
        }}
      >
        <SceneRoot
          isCoarsePointer={capabilityProfile.isCoarsePointer}
          isCompactViewport={capabilityProfile.isCompactViewport}
          isPageVisible={capabilityProfile.isPageVisible}
          prefersReducedMotion={capabilityProfile.prefersReducedMotion}
        />
      </Canvas>
    </div>
  );
}
