import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import SliderText from "./components/SliderText/SliderText";
import { Landing } from "./Landing.style";

const LandingPage = () => {

  return ( 
    <Landing onScroll={(e)=>console.log(e)}>
        <Hero/>
        <SliderText myworkskill={"MY WORK -"}/>
        <Projects/>
        <SliderText myworkskill={"MY SKILLS"}/>

      
    </Landing>
   );
}
 
export default LandingPage;