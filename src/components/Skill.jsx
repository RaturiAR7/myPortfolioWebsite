import React from "react";
const Skill = () => {
  return (
    <div className='tech h-full w-full flex flex-col items-center mt-10 justify-center'>
      <h1 className='md:text-6xl text-4xl text-center w-full'>
        TECHNICAL SKILLS
      </h1>
      <div className=' h-full w-full m-10 flex flex-col justify-center items-center'>
        <li>
          <h3 className='text-2xl text-white ml-10 '>html5</h3>
          <span className='bar ml-10'>
            <span className='html'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>CSS3</h3>
          <span className='bar ml-10'>
            <span className='css'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>Javascript</h3>
          <span className='bar ml-10'>
            <span className='javascript'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>React JS</h3>
          <span className='bar ml-10'>
            <span className='react'></span>
          </span>
        </li>
        <li>
          <h3 className='text-xl text-white ml-10'>NodeJS</h3>
          <span className='bar ml-10'>
            <span className='nodejs'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>TailwindCSS</h3>
          <span className='bar ml-10'>
            <span className='tailwind'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>Bootstrap</h3>
          <span className='bar ml-10'>
            <span className='bootstrap'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>C++</h3>
          <span className='bar ml-10'>
            <span className='cplus'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>Java</h3>
          <span className='bar ml-10'>
            <span className='java'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>Python</h3>
          <span className='bar ml-10'>
            <span className='python'></span>
          </span>
        </li>
        <li>
          <h3 className='text-2xl text-white ml-10 '>GIT</h3>
          <span className='bar ml-10'>
            <span className='git'></span>
          </span>
        </li>
      </div>
    </div>
  );
};

export default Skill;
