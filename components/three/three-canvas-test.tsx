"use client";

import { Canvas } from "@react-three/fiber";

type ThreeCanvasTestProps = {
  className?: string;
};

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ThreeCanvasTest({ className }: Readonly<ThreeCanvasTestProps>) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* Temporary Phase 4 verification canvas; replace in later 3D storytelling steps. */}
      <div
        aria-hidden="true"
        className="h-64 min-h-64 w-full overflow-hidden rounded-md border border-[var(--color-border-default)] bg-[var(--color-bg-page)] sm:h-80"
      >
        <Canvas
          aria-hidden="true"
          camera={{ position: [0, 0, 4], fov: 45 }}
          dpr={1}
          frameloop="demand"
        >
          <ambientLight intensity={0.45} />
          <directionalLight intensity={1} position={[3, 4, 5]} />
          <mesh>
            <sphereGeometry args={[1, 32, 16]} />
            <meshStandardMaterial color="#d6a85c" roughness={0.55} />
          </mesh>
        </Canvas>
      </div>
      <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
        Temporary static WebGL canvas test. If WebGL is unavailable, this HTML
        description remains available.
      </p>
    </div>
  );
}
