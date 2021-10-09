import { PhoneShellStyle } from "../PhoneShell.style";
import visions1 from "../images/Visions1.png"
import visions2 from "../images/Visions2.png"
import visions3 from "../images/Visions3.png"



const Phone7 = () => {
  return ( 
    <PhoneShellStyle>
      <div className="phoneNotch">
        <div className="phoneNotchCamera"></div>
      </div>
      <div className="phoneInnerShell">
        <div className="screenSaver">Hover & scroll</div>
        <img style={{marginTop:"20px"}}
        className="bikeIMG1"
        srcSet={visions1}
        alt="bikeimg1" 
        width="100%"/>

        <img className="bikeIMG1"
         srcSet={visions2}
         alt="bikeimg2"
         width="100%"/>

        <img className="bikeIMG1"
         srcSet={visions3} alt="bikeimg3" width="100%"/>
 
        
      </div>
      <div className="phoneButton">
        <a href="https://visions-of-peace.netlify.app/"
        target="_blank" rel="noreferrer">Visit here</a>
        
      </div>
    </PhoneShellStyle>
   );
}

export default Phone7;
