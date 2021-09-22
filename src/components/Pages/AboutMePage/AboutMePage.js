
import { useContext } from "react";
import { PageWrapper } from "../../App/App";
import Footer from "../../App/Footer/Footer";
import { AboutPageStyle, ThreeColumsIntro } from "./AboutMe.style";
import AboutBio from "./Components/AboutBio";
import AboutLeftColumn from "./Components/AboutLeftColumn";
import AboutMiddleColumn from "./Components/AboutMiddleColumn";
import AboutRightColumn from "./Components/AboutRightColumn";
import Youtube from "./Components/YouTube";

const AboutMePage = () => {

  let stateObj = useContext(PageWrapper)

  return ( 
    <AboutPageStyle 
    DarkTheme={stateObj.state.colourBrown}
    LightTheme={stateObj.state.colourNaked}>

      <Footer/>

      <ThreeColumsIntro>
        <AboutLeftColumn/>
        <AboutMiddleColumn/>
        <AboutRightColumn/>
      </ThreeColumsIntro>

      <AboutBio/>

      <Youtube/>
      
      
    </AboutPageStyle>
   );
}
 
export default AboutMePage;