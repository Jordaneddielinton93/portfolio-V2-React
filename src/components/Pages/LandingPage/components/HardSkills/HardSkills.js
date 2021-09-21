import CardContainers from "./Cards/Cards";
import { CssImg } from "./Cards/images/CssSvg";
import { FireSvg } from "./Cards/images/FireSvg";
import { JSimg } from "./Cards/images/JsSvg";
import { ReactSvg } from "./Cards/images/ReactSvg";
import { HardSkillStyle } from "./HardSkills.style";

const HardSkills = () => {

  return ( 
    <HardSkillStyle >
      <CardContainers 
         title={"REACT"}
         title2={"React Testing Lib"}
        img={ReactSvg}/>
      <CardContainers
        title={"SASS/Styled Comps"}
        title2={"Css"}
        img={CssImg}  />
      <CardContainers
        title={"JAVASCRIPT"}
        title2={"Figma"}
        img={JSimg}/>
      <CardContainers
        title={"Firebase"}
        title2={"Photoshop"}
        img={FireSvg}/>

    </HardSkillStyle>
   );
}
 
export default HardSkills;