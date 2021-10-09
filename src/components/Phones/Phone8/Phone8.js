import { PhoneShellStyle } from "../PhoneShell.style";
import Amigo1 from "../images/Amigo1.png"
import Amigo2 from "../images/Amigo2.png"
import Amigo3 from "../images/Amigo3.png"
import Amigo4 from "../images/Amigo4.png"
import Amigo5 from "../images/Amigo5.png"



const Phone8 = () => {
  return ( 
    <PhoneShellStyle>
      <div className="phoneNotch">
        <div className="phoneNotchCamera"></div>
      </div>
      <div className="phoneInnerShell">
        <div className="screenSaver">Hover & scroll</div>
        <img style={{marginTop:"20px"}}
        className="bikeIMG1"
        srcSet={Amigo1}
        alt="bikeimg1" 
        width="100%"/>

        <img className="bikeIMG1"
         srcSet={Amigo2}
         alt="bikeimg2"
         width="100%"/>

        <img className="bikeIMG1"
         srcSet={Amigo3} alt="amigo3" width="100%"/>

        <img className="bikeIMG1"
         srcSet={Amigo4} alt="amigo3" width="100%"/>

        <img className="bikeIMG1"
         srcSet={Amigo5} alt="amigo3" width="100%"/>
 
        
      </div>
      <div className="phoneButton">
        <a href="https://amigo-quotes.netlify.app/"
        target="_blank" rel="noreferrer">Visit here</a>
        
      </div>
    </PhoneShellStyle>
   );
}

export default Phone8;
