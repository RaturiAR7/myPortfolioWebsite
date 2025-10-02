import { projectInfo } from "./ProjectInfo";
const Project = () => {
  return (
    <div
      id='Projects'
      className='w-full h-full text-center pt-12 flex flex-col'
    >
      <h1 className='text-7xl'>Projects</h1>
      <p className='md:text-2xl text-xl'>
        {" "}
        Throughout my career as a developer, I have had the opportunity to work
        on a variety of exciting and challenging projects. From developing
        robust web applications to creating innovative mobile apps, I have
        tackled a wide range of projects that have allowed me to hone my skills
        and expertise.
      </p>
      <div className='flex flex-wrap w-full h-full mt-24 justify-center items-center md:justify-around flex-col md:flex-row gap-10'>
        {projectInfo.map((project) => {
          return (
            <div
              key={project.id}
              className='flex flex-col items-center justify-center m-4 max-w-sm p-4 rounded-xl bg-violet-950'
            >
              <img src={project.image} className='rounded-md' />
              <h2 className='text-xl font-bold'>{project.name}</h2>
              <p className='text-white text-base'>{project.description}</p>
              <a href={project.projectlink}>
                <button className='bg-pink-400 text-center text-white font-medium text-sm w-24 p-2 rounded-md cursor-pointer hover:bg-pink-500'>
                  Go to project
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
