import { PhoneShellStyle } from "../PhoneShell.style";
import FetchFoods1 from "../images/FetchFoods1.png"
import FetchFoods2 from "../images/FetchFoods2.png"
import FetchFoods3 from "../images/FetchFoods3.png"
import FetchFoods4 from "../images/FetchFoods4.png"

const Phone3 = () => {
  return ( 
    <PhoneShellStyle>
      <div className="phoneNotch">
        <div className="phoneNotchCamera"></div>
      </div>
      <div className="phoneInnerShell">
        <div className="screenSaver">Hover & scroll</div>
        <img style={{marginTop:"20px"}}
        className="bikeIMG1"
        srcSet={FetchFoods1}
        alt="bikeimg1" 
        width="100%"/>

        <img className="bikeIMG1"
         srcSet={FetchFoods2}
         alt="bikeimg2"
         width="100%"/>

        <img className="bikeIMG1"
         srcSet={FetchFoods3} alt="bikeimg3" width="100%"/>
        <img className="bikeIMG1"
         srcSet={FetchFoods4} alt="bikeimg4" width="100%"/>
       
        
      </div>
      <div className="phoneButton">
        Visit here
      </div>
    </PhoneShellStyle>
   );
}
 
export default Phone3;