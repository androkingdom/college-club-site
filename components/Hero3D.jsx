"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

function LaptopModel() {
  // Load GLB from public folder
  const gltf = useGLTF("/models/laptop.glb");
  return <primitive object={gltf.scene} scale={1} />;
}

export default function Hero3D() {
  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] rounded-xl shadow-lg overflow-hidden">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Stage environment="city" intensity={0.6}>
          <LaptopModel />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
