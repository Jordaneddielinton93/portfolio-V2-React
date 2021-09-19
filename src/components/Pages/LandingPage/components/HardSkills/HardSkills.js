import CardContainers from "./Cards/Cards";
import { CssImg } from "./Cards/images/CssSvg";
import { FireSvg } from "./Cards/images/FireSvg";
import { JSimg } from "./Cards/images/JsSvg";
import { ReactSvg } from "./Cards/images/ReactSvg";
import { HardSkillStyle } from "./HardSkills.style";

const HardSkills = () => {

  return ( 
    <HardSkillStyle >
      <CardContainers title={"REACT"} img={ReactSvg}/>
      <CardContainers title={"SASS/Styled Comps"}img={CssImg}  />
      <CardContainers title={"JAVASCRIPT"} img={JSimg}/>
      <CardContainers title={"Firebase"} img={FireSvg}/>

    </HardSkillStyle>
   );
}
 
export default HardSkills;