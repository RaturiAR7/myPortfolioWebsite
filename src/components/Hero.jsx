import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  return (
    <div className='section h-full flex flex-col items-center ' id='Home'>
      <div className='h-full w-full flex flex-col md:flex-row md:justify-center md:-mt-12 mb-10 items-center'>
        <div className='flex relative md:w-1/2 h-96 md:h-screen md:mt-20 md:ml-20 md:mr-20 md:justify-center items-center'>
          <Canvas
            gl={{ preserveDrawingBuffer: false }}
            // frameloop='demand'
          >
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere
              args={[1, 800, 900]}
              scale={window.innerWidth > 500 ? 2.5 : 2.0}
            >
              <MeshDistortMaterial
                color='#da4ea2'
                attach='material'
                distort={0.3}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            src='./img/pic1.png'
            className='absolute h-72 md:h-4/6 md:mr-10'
          ></img>
        </div>
        <div className='md:h-full w-full md:w-1/2 items-center flex flex-col'>
          <h1 className='text-center'>Hi,I'm Maahi</h1>
          <div className='whatwedo flex gap-2 items-center'>
            <div className='line h-1' src='./img/line.png'></div>
            <h2 className='text-pink-400 font-bold text-6xl'>What I Do</h2>
          </div>
          <p className='Desc text-xl text-center text-gray-300 font-serif'>
            I enjoy creating visually appealing websites.Welcome to my digital
            playground where I turn ideas into reality.
          </p>
          <a className='btn' href='#Who'>
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
