import { PhoneShellStyle } from "../PhoneShell.style";
import groPro1 from "../images/groPro1.png"
import groPro2 from "../images/groPro2.png"
import groPro3 from "../images/groPro3.png"
import groPro4 from "../images/groPro4.png"
import groPro5 from "../images/groPro5.png"
const Phone4 = () => {
  return ( 
    <PhoneShellStyle>
      <div className="phoneNotch">
        <div className="phoneNotchCamera"></div>
      </div>
      <div className="phoneInnerShell">
        <div className="screenSaver">Hover & scroll</div>
        <img style={{marginTop:"20px"}}
        className="bikeIMG1"
        srcSet={groPro1}
        alt="bikeimg1" 
        width="100%"/>

        <img className="bikeIMG1"
         srcSet={groPro2}
         alt="bikeimg2"
         width="100%"/>

        <img className="bikeIMG1"
         srcSet={groPro3} alt="bikeimg3" width="100%"/>
        <img className="bikeIMG1"
         srcSet={groPro4} alt="bikeimg4" width="100%"/>
        <img className="bikeIMG1"
         srcSet={groPro5} alt="bikeimg5" width="100%"/>
        
      </div>
      <div className="phoneButton">
        Visit here
      </div>
    </PhoneShellStyle>
   );
}
 
export default Phone4;