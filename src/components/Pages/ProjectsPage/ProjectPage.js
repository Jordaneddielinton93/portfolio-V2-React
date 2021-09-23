import { useContext } from "react";
import { PageWrapper } from "../../App/App";
import Footer from "../../App/Footer/Footer";
import Phone1 from "../../Phones/Phone1/Phone1";
import Phone2 from "../../Phones/Phone2/Phone2";
import Phone3 from "../../Phones/Phone3/Phone3";
import Phone4 from "../../Phones/Phone4/Phone4";
import Phone5 from "../../Phones/Phone5/Phone5";
import Phone6 from "../../Phones/Phone6/Phone6";
import { ProjectPageStyled } from "./ProjectPage.styled";

const ProjectPage = () => {

  let stateObj = useContext(PageWrapper)
  
  return ( 
    <ProjectPageStyled 
    DarkTheme={stateObj.state.colourBrown}
    LightTheme={stateObj.state.colourNaked}
    >
      <h1 className="main-Title">  
        MY <br />
        PR<span style={{fontFamily:"Montserrat"}}>O</span>JECTS
      </h1>
      <main className="main-container">
        <div className="main-container-top">
          <Phone1/> 
          <Phone2/>
          <Phone3/>
          <Phone4/>
        </div>
        
        <div className="main-container-bottom">
          <Phone5/>
          <Phone6/>
          <Phone6/>
          <Phone6/>
        </div>

        <Footer/>

      </main>
    </ProjectPageStyled>
   );
}
 
export default ProjectPage;