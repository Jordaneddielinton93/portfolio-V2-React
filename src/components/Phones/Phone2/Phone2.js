import { PhoneShellStyle } from "../PhoneShell.style";
import bikeIMG1 from "../images/RoadMap1.png"
import bikeIMG2 from "../images/RoadMap2.png"

const Phone2 = () => {
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

        
        
      </div>
      <div className="phoneButton">
        Visit here
      </div>
    </PhoneShellStyle>
   );
}
 
export default Phone2;