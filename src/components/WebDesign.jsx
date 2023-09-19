import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";
import Model from "./Mac";

const WebDesign = () => {
  return (
    <Canvas
      className='w-full h-96'
      frameloop='demand'
      gl={{ preserveDrawingBuffer: false }}
    >
      <Model
        scale={window.innerWidth > 700 ? [0.15, 0.15, 0.13] : [0.2, 0.2, 0.18]}
      />
      <ambientLight intensity={0.4} />
      {/* <Mac/> */}
      <OrbitControls
        autoRotate={window.innerWidth >= 720 ? true : false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default WebDesign;
