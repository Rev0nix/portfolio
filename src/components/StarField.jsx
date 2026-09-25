import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarField() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 1],
        fov: 75,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
      }}
    >
      <Stars
        radius={70}
        depth={50}
        count={900}
        factor={1.25}
        saturation={0}
        fade
        speed={0.18}
      />
    </Canvas>
  );
}