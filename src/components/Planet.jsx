import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
  Sparkles,
} from "@react-three/drei";

import { useRef } from "react";

function PlanetMesh() {
  const planet = useRef();
  const ring = useRef();

  useFrame((state, delta) => {
    if (planet.current) {
      planet.current.rotation.y += delta * 0.18;
      planet.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }

    if (ring.current) {
      ring.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group>

      {/* PLANET */}

      <mesh ref={planet}>
        <sphereGeometry args={[2.2, 128, 128]} />

        <meshStandardMaterial
          color="#650000"
          roughness={0.72}
          metalness={0.08}
          emissive="#350000"
          emissiveIntensity={1.4}
        />
      </mesh>


      {/* OUTER RED GLOW */}

      <mesh scale={1.06}>
        <sphereGeometry args={[2.2, 64, 64]} />

        <meshBasicMaterial
          color="#ff1600"
          transparent
          opacity={0.07}
        />
      </mesh>


      {/* ORBIT RING */}

      <mesh
        ref={ring}
        rotation={[Math.PI / 2.7, 0.2, 0]}
      >
        <torusGeometry args={[2.7, 0.008, 16, 256]} />

        <meshBasicMaterial
          color="#ff3b00"
          transparent
          opacity={0.65}
        />
      </mesh>


      {/* SECOND THIN RING */}

      <mesh
        rotation={[Math.PI / 2.7, 0.2, 0]}
        scale={1.08}
      >
        <torusGeometry args={[2.7, 0.003, 12, 256]} />

        <meshBasicMaterial
          color="#ff6a00"
          transparent
          opacity={0.25}
        />
      </mesh>

    </group>
  );
}


function Scene() {

  return (
    <>
      {/* SPACE */}

      <Stars
        radius={80}
        depth={40}
        count={2500}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />


      {/* RED PARTICLES */}

      <Sparkles
        count={120}
        scale={[12, 8, 8]}
        size={2}
        speed={0.25}
        color="#ff4d00"
      />


      {/* LIGHTING */}

      <ambientLight intensity={0.18} />

      <pointLight
        position={[4, 3, 5]}
        intensity={18}
        color="#ff3b00"
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={5}
        color="#ff8a00"
      />


      {/* PLANET */}

      <Float
        speed={1.2}
        rotationIntensity={0.15}
        floatIntensity={0.35}
      >
        <PlanetMesh />
      </Float>
    </>
  );
}


export default function Planet() {

  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 42,
      }}

      dpr={[1, 2]}

      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <Scene />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}