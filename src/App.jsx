import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skill from "./components/Skill";
import TimeLine from "./components/TimeLine";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/img/bg.jpeg')] bg-no-repeat bg-cover w-full h-full text-white px-2">
        <Hero></Hero>
        <Who></Who>
        <Works />
        <Project></Project>
        <Skill />
        <TimeLine />
        <Contact />
      </div>
    </>
  );
}

export default App;
