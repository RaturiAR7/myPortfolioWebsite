import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "./Atom";

const Development = () => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: false }}>
      <Atom></Atom>
      <OrbitControls
        autoRotate={window.innerWidth >= 720 ? true : false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Development;
//environment="city"
