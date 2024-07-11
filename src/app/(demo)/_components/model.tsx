"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { DirectionalLightHelper, Color } from "three";
import { useThree } from "@react-three/fiber";

export const Model = () => {
  return (
    <div className="w-full h-full">
      <Canvas shadows gl={{ alpha: true }}>
        <Render />
      </Canvas>
    </div>
  );
};

const CoreModel = () => {
  const fox = useGLTF("/s_model.glb");
  const foxRef = useRef<THREE.Object3D>();

  useFrame((state, delta) => {
    if (!foxRef.current) return;

    if (foxRef.current) {
      foxRef.current.rotation.y += delta * 0.5;
      foxRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <primitive
      ref={foxRef}
      object={fox.scene}
      scale={0.9}
      rotation-y={-1.8}
      castShadow
      receiveShadow
    />
  );
};

const Render = () => {
  const directionalLightRef1 = useRef();
  const directionalLightRef2 = useRef();
  const areaLightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (directionalLightRef1.current) {
      const helper1 = new DirectionalLightHelper(directionalLightRef1.current);
      scene.add(helper1);
      return () => {
        scene.remove(helper1);
      };
    }
  }, [scene]);

  useEffect(() => {
    if (directionalLightRef2.current) {
      const helper2 = new DirectionalLightHelper(directionalLightRef2.current);
      scene.add(helper2);
      return () => {
        scene.remove(helper2);
      };
    }
  }, [scene]);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <directionalLight castShadow shadow-normalBias={0.04} />
      <directionalLight
        castShadow
        color={new Color("green")}
        shadow-normalBias={0.04}
      />
      <CoreModel />
      <Environment preset="city" />
    </>
  );
};
