import { OrbitControls } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;

  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 19px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <div className=' h-full w-full flex' id='Who'>
      <div className='md:h-full w-full flex md:flex-row flex-col items-center'>
        <div className='flex h-96 md:h-screen md:w-1/2 justify-center items-center'>
          <Canvas
            camera={{ fov: 25, position: [5, 5, 5] }}
            gl={{ preserveDrawingBuffer: false }}
            frameloop={window.innerWidth > 600 ? "always" : "demand"}
          >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube></Cube>
          </Canvas>
        </div>
        <div className='flex flex-col w-full md:w-1/2 justify-center md:mr-5'>
          <h2 className='text-5xl font-semibold text-center'>
            THINK OUTSIDE THE SQUARE
          </h2>
          <div className='flex items-center'>
            <p className='text-pink-500 text-lg font-semibold'>Overview</p>
          </div>
          <p className='text-xl text-gray-500 font-serif'>
            Welcome to my portfolio website! I'm excited to share my skills,
            experience, and projects with you. As a computer undergrad, I have a
            passion for creating innovative and effective solutions that solve
            real-world problems. This website serves as a showcase of my work,
            providing you with an insight into my skills and expertise. I have
            expertise in a range of programming languages, including JavaScript,
            C++, C, Python, and Java. My proficiency in these languages allows
            me to create functional and efficient solutions, tailored to meet
            the needs of my clients. Whether it's building dynamic web
            applications using JavaScript or developing complex algorithms in
            C++, I have the technical expertise to bring your ideas to life.
            Whether you're an employer, potential client, or simply curious
            about my work, I hope this website gives you a glimpse into my
            abilities and inspires you to collaborate with me. Thank you for
            visiting, and please feel free to explore my portfolio and get in
            touch with any questions or opportunities.
          </p>
          <a className='btn' href='#ProjectPage'>
            See our work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Who;
