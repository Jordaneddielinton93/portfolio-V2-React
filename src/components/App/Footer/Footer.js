import { FooterStyle } from "./Footer.style";
import { AiFillLinkedin,AiFillTwitterCircle,AiFillYoutube,AiFillGithub } from 'react-icons/ai';
import { useContext } from "react";
import { PageWrapper } from "../App";
const Footer = () => {
  let stateObj = useContext(PageWrapper)
  return ( 
    <FooterStyle 
    DarkTheme={stateObj.state.colourBrown}
    LightTheme={stateObj.state.colourNaked}>

      <a target="_blank" rel="noreferrer"
      href="https://www.linkedin.com/in/jordan-linton-38541820a">
        <AiFillLinkedin/>
      </a>

      <a target="_blank" rel="noreferrer"
      href="https://twitter.com/JordanLinton93">
        <AiFillTwitterCircle/>
      </a>

      <a target="_blank" rel="noreferrer"
       href="https://github.com/Jordaneddielinton93">
         <AiFillGithub/>
      </a>

      <a target="_blank" rel="noreferrer" 
      href="https://www.youtube.com/channel/UCDxWVy1PYe_-Bnvdxm23s8w">
        <AiFillYoutube/>
      </a>
      
    </FooterStyle>
   );
}
 
export default Footer;