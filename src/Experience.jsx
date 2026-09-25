import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import "./Experience.css";
import Reveal from "./components/Reveal";

function Core() {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.25}
      floatIntensity={0.8}
    >
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2.2, 5]} />

        <meshStandardMaterial
          color="#390000"
          emissive="#ff2100"
          emissiveIntensity={1.8}
          roughness={0.32}
          metalness={0.65}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const ring4 = useRef();



 useFrame(() => {
  if (ring1.current) {
    ring1.current.rotation.z += 0.0007;
  }

  if (ring2.current) {
    ring2.current.rotation.y -= 0.00045;
  }

  if (ring3.current) {
    ring3.current.rotation.x += 0.0006;
    ring3.current.rotation.z -= 0.0003;
  }

  if (ring4.current) {
    ring4.current.rotation.y -= 0.00035;
    ring4.current.rotation.z -= 0.0005;
  }
});

  return (
    <>
      <mesh ref={ring1} rotation={[1.2, 0.2, 0]}>
        <torusGeometry args={[3.1, 0.018, 16, 160]} />

        <meshBasicMaterial color="#ff4d00" />
      </mesh>

      <mesh ref={ring2} rotation={[1.5, -0.5, 0]}>
        <torusGeometry args={[3.5, 0.009, 16, 160]} />

        <meshBasicMaterial color="#ff1600" />
      </mesh>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} />

      <pointLight
        position={[3, 2, 5]}
        color="#a64e3f"
        intensity={12}
      />

      <pointLight
        position={[-4, -7, -3]}
        color="#d35e0b"
        intensity={4}
      />

      <pointLight
        position={[-4, -7, -3]}
        color="#d35e0b"
        intensity={4}
      />

      <Stars
        radius={35}
        depth={40}
        count={1800}
        factor={2}
        saturation={0}
        fade
        speed={0.3}
      />

      <Core />

      <Rings />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </>
  );
}

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <span>04 / EXPERIENCE</span>
        <span>REALTIME / 3D</span>
      </div>

      <div className="experience-layout">
        <div className="experience-copy">

  <Reveal>
    <p className="experience-label">
      BEYOND THE SCREEN
    </p>
  </Reveal>

  <Reveal delay={0.1}>
    <h2>
      DIGITAL
      <br />
      <span>WORLDS.</span>
    </h2>
  </Reveal>

  <Reveal delay={0.2}>
    <p className="experience-description">
  I explore interactive 3D environments, motion,
  realtime graphics and modern web technologies
  to create immersive digital experiences.
</p>
  </Reveal>

  <Reveal delay={0.3}>
    <div className="experience-meta">
  <span>THREE.JS</span>
  <span>WEBGL</span>
  <span>REACT</span>
  <span>FRAMER MOTION</span>
</div>
  </Reveal>

</div>

        <div className="canvas-wrapper">
          <Canvas
            camera={{
              position: [0, 0, 9],
              fov: 45,
            }}
            dpr={[1, 1.5]}
          >
            <Scene />
          </Canvas>

          <div className="canvas-label">
            INTERACTIVE OBJECT / 001
          </div>
        </div>
      </div>

      <div className="experience-footer">
        <span>MOVE YOUR CURSOR</span>
        <span>ROTATE / EXPLORE / DISCOVER</span>
      </div>
    </section>
  );
}