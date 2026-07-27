export function SceneRoot() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight intensity={0.75} position={[3, 4, 5]} />
      {/* Temporary Phase 4 mesh; replace with the central scene object in Step 4.3. */}
      <mesh position={[1.35, -0.2, 0]}>
        <sphereGeometry args={[0.85, 32, 16]} />
        <meshStandardMaterial color="#d6a85c" roughness={0.65} />
      </mesh>
    </>
  );
}
