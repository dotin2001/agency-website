"use client";

import { useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { SceneRoot } from "@/components/three/scene-root";
import { WebGLFallback } from "@/components/three/webgl-fallback";

function canUseWebGL() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") ||
          canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

function subscribeToWebGLSupport() {
  return () => {};
}

function getWebGLSnapshot() {
  return canUseWebGL();
}

function getServerWebGLSnapshot() {
  return null;
}

export function PersistentCanvas() {
  const isWebGLSupported = useSyncExternalStore(
    subscribeToWebGLSupport,
    getWebGLSnapshot,
    getServerWebGLSnapshot,
  );

  if (isWebGLSupported === null) {
    return null;
  }

  if (!isWebGLSupported) {
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
        dpr={1}
        frameloop="demand"
        gl={{ alpha: true, antialias: true }}
      >
        <SceneRoot />
      </Canvas>
    </div>
  );
}
