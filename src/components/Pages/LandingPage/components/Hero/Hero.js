import { HeroStyle, HeroSection,HeroSection2, HeroFirstName, HeroSecoundName, HeroMiddleName } from "./Hero.style";

import arrowRight from "../Images/arrow.svg"
import arrowDown from "../Images/arrowdown.svg"
import {myimage} from "./svgIMG"


const Hero = () => {
  
  return ( 
    <HeroStyle>
      <HeroSection>

        <HeroFirstName>
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




      <HeroSection2 style={{flexDirection:"row"}}>
        {myimage}
        <div className="circleContainer">
          <div className="circle">Web developer</div>
          
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