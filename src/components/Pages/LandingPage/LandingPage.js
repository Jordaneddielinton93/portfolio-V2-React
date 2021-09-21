import Footer from "../../App/Footer/Footer";
import HardSkills from "./components/HardSkills/HardSkills";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import SliderText from "./components/SliderText/SliderText";
import { Landing } from "./Landing.style";

const LandingPage = () => {

  

  return ( 
    <>
    <Landing  >
        <Hero/>
        <SliderText myworkskill={"MY WORK -"}/>
        <Projects />
        <SliderText myworkskill={"MY SKILLS"} />
        <HardSkills/>
    </Landing>
    <Footer/>
    </>
   );
}
 
export default LandingPage;