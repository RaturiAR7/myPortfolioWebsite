import React from "react";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";

const Cube = () => {
  const textRef = useRef();
  useFrame((state) => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh scale={1.5}>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach='map'>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />

          <color attach='background' args={["pink"]} />
          <Text ref={textRef} fontSize={3} color='#555'>
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
