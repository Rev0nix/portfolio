import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function Planet() {
  const planet = useRef();

  useFrame((state, delta) => {
    if (!planet.current) return;

    const time = state.clock.getElapsedTime();

    planet.current.rotation.y += delta * 0.16;
    planet.current.rotation.x = Math.sin(time * 0.25) * 0.08;

    // Slight mouse movement
    planet.current.position.x +=
      (state.mouse.x * 0.35 - planet.current.position.x) * 0.015;

    planet.current.position.y +=
      (state.mouse.y * 0.25 - planet.current.position.y) * 0.015;
  });

  return (
    <Float
      speed={0.8}
      rotationIntensity={0.12}
      floatIntensity={0.25}
    >
      <group
  ref={planet}
  scale={0.62}
  position={[0.15, 0, 0]}
>

        {/* MAIN PLANET */}
        <mesh>
          <sphereGeometry args={[2.45, 96, 96]} />

          <meshStandardMaterial
            color="#680500"
            roughness={0.62}
            metalness={0.18}
            emissive="#4b0000"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* ATMOSPHERE */}
        <mesh scale={1.07}>
          <sphereGeometry args={[2.45, 64, 64]} />

          <meshBasicMaterial
            color="#ff2400"
            transparent
            opacity={0.065}
          />
        </mesh>

        {/* RING 1 */}
        <mesh rotation={[Math.PI / 2.7, 0.2, 0]}>
          <torusGeometry
            args={[2.85, 0.012, 16, 200]}
          />

          <meshBasicMaterial
            color="#ff4b00"
            transparent
            opacity={0.78}
          />
        </mesh>

        {/* RING 2 */}
        <mesh
          rotation={[
            Math.PI / 2.55,
            -0.15,
            0.1,
          ]}
        >
          <torusGeometry
            args={[3.08, 0.006, 12, 200]}
          />

          <meshBasicMaterial
            color="#ff1f00"
            transparent
            opacity={0.42}
          />
        </mesh>

      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      {/* DARK SPACE */}

      <ambientLight intensity={0.16} />

      {/* RED KEY LIGHT */}
      <pointLight
        position={[4, 3, 5]}
        intensity={20}
        distance={12}
        color="#ff2600"
      />

      {/* ORANGE RIM LIGHT */}
      <pointLight
        position={[-4, -2, 3]}
        intensity={8}
        distance={10}
        color="#ff7200"
      />

      {/* PARTICLES */}
      <Sparkles
        count={180}
        scale={[12, 9, 8]}
        size={1.7}
        speed={0.18}
        color="#ff5a00"
      />

      <Planet />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5.4],
        fov: 40,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Scene />
    </Canvas>
  );
}