import type { ThreeElements } from "@react-three/fiber";

type HeroObjectProps = Pick<ThreeElements["group"], "position" | "rotation" | "scale">;

const brandGold = "rgb(213, 187, 110)";
const deepNavy = "rgb(10, 16, 26)";

export function HeroObject({ position, rotation, scale }: Readonly<HeroObjectProps>) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh rotation={[0.2, 0.35, -0.12]}>
        <dodecahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color={brandGold} metalness={0.12} roughness={0.58} />
      </mesh>
      <mesh rotation={[Math.PI / 2.7, 0.18, Math.PI / 8]}>
        <torusGeometry args={[1.02, 0.035, 8, 40]} />
        <meshStandardMaterial color={deepNavy} metalness={0.08} roughness={0.52} />
      </mesh>
      <mesh rotation={[Math.PI / 2.15, -0.35, -Math.PI / 5]}>
        <torusGeometry args={[0.82, 0.026, 8, 36]} />
        <meshStandardMaterial color={brandGold} metalness={0.1} roughness={0.62} />
      </mesh>
      <mesh rotation={[0.2, 0, Math.PI / 2.8]} position={[0.04, -0.03, 0]}>
        <cylinderGeometry args={[0.028, 0.028, 1.72, 12]} />
        <meshStandardMaterial color={deepNavy} metalness={0.08} roughness={0.56} />
      </mesh>
    </group>
  );
}
