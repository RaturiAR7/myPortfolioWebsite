import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skill from "./components/skill";
import TimeLine from "./components/TimeLine";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='app bg-black w-full full text-white'>
      <Navbar />
      <Hero></Hero>
      <Who></Who>
      <Works />
      <Project></Project>
      <Skill />
      <TimeLine />
      <Contact />
    </div>
  );
}

export default App;
