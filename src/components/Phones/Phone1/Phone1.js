import { PhoneShellStyle } from "../PhoneShell.style";
import bikeIMG1 from "../images/bikeman1.png"
import bikeIMG2 from "../images/bikeman2.png"
import bikeIMG3 from "../images/bikeman3.png"
import bikeIMG4 from "../images/bikeman4.png"
import bikeIMG5 from "../images/bikeman5.png"
import { Link } from "react-router-dom";
const Phone1 = () => {
  return ( 
    <PhoneShellStyle>
      <div className="phoneNotch">
        <div className="phoneNotchCamera"></div>
      </div>
      <div className="phoneInnerShell">
        <div className="screenSaver">Hover & scroll</div>
        <img style={{marginTop:"20px"}}
        className="bikeIMG1"
        srcSet={bikeIMG1}
        alt="bikeimg1" 
        width="100%"/>

        <img className="bikeIMG1"
         srcSet={bikeIMG2}
         alt="bikeimg2"
         width="100%"/>

        <img className="bikeIMG1"
         srcSet={bikeIMG3} alt="bikeimg3" width="100%"/>
        <img className="bikeIMG1"
         srcSet={bikeIMG4} alt="bikeimg4" width="100%"/>
        <img className="bikeIMG1"
         srcSet={bikeIMG5} alt="bikeimg5" width="100%"/>
        
      </div>
      <div className="phoneButton">
        <a target="_blank" href="https://bike-man-dan-wheeldeal.netlify.app/" rel="noreferrer">Visit here</a> 
      </div>
    </PhoneShellStyle>
   );
}
 
export default Phone1;



