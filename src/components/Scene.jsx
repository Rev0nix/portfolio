import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";

function Core() {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    mesh.current.rotation.x = t * 0.18;
    mesh.current.rotation.y = t * 0.28;

    mesh.current.position.y = Math.sin(t * 0.7) * 0.12;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.25}
      floatIntensity={0.5}
    >
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.55, 2]} />

        <meshStandardMaterial
          color="#d73502"
          emissive="#7a1200"
          emissiveIntensity={2.2}
          roughness={0.25}
          metalness={0.75}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <div className="scene">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.15} />

        <pointLight
          position={[3, 2, 4]}
          color="#ff5a00"
          intensity={18}
          distance={10}
        />

        <pointLight
          position={[-4, -2, 2]}
          color="#7d0800"
          intensity={10}
          distance={8}
        />

        <Core />

        <Sparkles
          count={100}
          scale={[10, 7, 8]}
          size={1.2}
          speed={0.25}
          color="#ff6a00"
        />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}

export default Scene;