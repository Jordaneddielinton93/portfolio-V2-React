import { HeroStyle, HeroSection,HeroSection2, HeroFirstName, HeroSecoundName, HeroMiddleName } from "./Hero.style";

import arrowRight from "../Images/arrow.svg"
import arrowDown from "../Images/arrowdown.svg"
import {myimage} from "./svgIMG"
import { useContext } from "react";
import { PageWrapper } from "../../../../App/App";
import { useHistory } from "react-router";

// important!!! im using styled components that are in the hero.styled.js file
const Hero = () => {

let stateObj = useContext(PageWrapper)
let history = useHistory();
  console.log(stateObj)
  return ( 
    <HeroStyle
     DarkTheme={stateObj.state.colourBrown}
     LightTheme={stateObj.state.colourNaked} >
      <HeroSection>

        <HeroFirstName >
          <h1>JORDAN</h1>
          <img src={arrowRight} alt="" srcset="" />
        </HeroFirstName>

        <HeroMiddleName>
          <h1>EDDIE</h1>
          <img src={arrowRight} alt="" srcset="" />
        </HeroMiddleName>

        <HeroSecoundName>
          <h1>LINTON</h1>
          <img src={arrowDown} alt="" srcset="" />
        </HeroSecoundName>

      </HeroSection>

      <HeroSection2
      DarkTheme={stateObj.state.colourBrown}
      LightTheme={stateObj.state.colourNaked}
       style={{flexDirection:"row"}}>

        {myimage}
        <div className="circleContainer" onClick={()=>history.push("/Contact")}>
          <div className="circle">Contact Me</div>
          
        </div>
        <article>
          <p>
            My plan is to help companies create  their dream web applications.
          With time and dedication to every aspect of their site, i make dreams become reality. 
          </p>
        </article>
      </HeroSection2>

      
      

    </HeroStyle>
   );
}
 
export default Hero;