import { projectInfo } from "./ProjectInfo";
const Project = () => {
  // const handleLink=(link)=>{

  // }
  return (
    <div
      id='Projects'
      className='w-full h-full text-center pt-12 flex flex-col'
    >
      <h1 className='text-7xl'>Projects</h1>
      <p className='text-2xl'>
        {" "}
        Throughout my career as a developer, I have had the opportunity to work
        on a variety of exciting and challenging projects. From developing
        robust web applications to creating innovative mobile apps, I have
        tackled a wide range of projects that have allowed me to hone my skills
        and expertise.
      </p>
      <div className='flex flex-wrap w-full h-full mt-24 justify-center items-center md:justify-around flex-col md:flex-row'>
        {projectInfo.map((project) => {
          return (
            <div
              key={project.id}
              className='flex flex-col items-center justify-center w-2/3 md:w-1/4 p-2 rounded-xl h-96 m-2 bg-violet-950'
            >
              <img src={project.image} alt='' />
              <h2 className='text-xl'>{project.name}</h2>
              <p className='text-white text-base'>{project.description}</p>
              <a href={project.projectlink}>
                <button className='bg-pink-400 text-center text-white font-medium w-24 p-2  rounded-md cursor-pointer hover:bg-pink-500'>
                  Go To Project
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
