import NavBar from "./components/NavBar";
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Project from "./components/Projects";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <SocialLinks />
      <Skills />
      <Project />
      <About />
      <Contact />
    </div>
  );
}

export default App;
