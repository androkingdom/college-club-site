"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LaptopModel() {
  const gltf = useGLTF("/models/laptop.glb");
  const modelRef = useRef();

  // Smooth idle rotation
  useFrame(() => {
    if (!modelRef.current) return;

    // target rotation (constant spin on Y)
    const targetRotationY = modelRef.current.rotation.y + 0.01;

    // interpolate towards it smoothly
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetRotationY,
      0.1 // smoothing factor
    );

    // Reset x and z slowly to 0
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      0,
      0.05
    );
    modelRef.current.rotation.z = THREE.MathUtils.lerp(
      modelRef.current.rotation.z,
      0,
      0.05
    );
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1} />;
}

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl shadow-lg overflow-hidden">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <Stage environment="city" intensity={0.5}>
          <LaptopModel />
        </Stage>
      </Canvas>
    </div>
  );
}
