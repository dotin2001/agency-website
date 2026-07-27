import { HeroObject } from "@/components/three/hero-object";

export function SceneRoot() {
  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight intensity={0.8} position={[3, 4, 5]} />
      <HeroObject
        position={[1.25, -0.2, 0]}
        rotation={[0.08, -0.24, 0.02]}
        scale={0.82}
      />
    </>
  );
}
