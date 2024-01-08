import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
// import Projects from "./Projects";
import Skills from "./Skills";
import CodingProfiles from "./CodingProfiles";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <CodingProfiles />
      <About />
      {/* <Projects /> */}
    </>
  );
};

export default App;
