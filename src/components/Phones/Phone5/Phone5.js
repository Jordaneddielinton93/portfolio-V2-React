import { PhoneShellStyle } from "../PhoneShell.style";
import folioV1 from "../images/folioV1.png"
import folioV2 from "../images/folioV2.png"
import folioV3 from "../images/folioV3.png"
import folioV4 from "../images/folioV4.png"

const Phone5 = () => {
  return ( 
    <PhoneShellStyle>
      <div className="phoneNotch">
        <div className="phoneNotchCamera"></div>
      </div>
      <div className="phoneInnerShell">
        <div className="screenSaver">Hover & scroll</div>
        <img style={{marginTop:"20px"}}
        className="bikeIMG1"
        srcSet={folioV1}
        alt="bikeimg1" 
        width="100%"/>

        <img className="bikeIMG1"
         srcSet={folioV2}
         alt="bikeimg2"
         width="100%"/>

        <img className="bikeIMG1"
         srcSet={folioV3} alt="bikeimg3" width="100%"/>
        <img className="bikeIMG1"
         srcSet={folioV4} alt="bikeimg4" width="100%"/>
 
        
      </div>
      <div className="phoneButton">
        <a href="https://jordans-new-portfolio.netlify.app/"
        target="_blank" rel="noreferrer"
>Visit here</a>
        
      </div>
    </PhoneShellStyle>
   );
}

export default Phone5;
