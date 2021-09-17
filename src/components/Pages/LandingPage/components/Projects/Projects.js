import { useContext } from "react";
import { PageWrapper } from "../../../../App/App";
import Phone1 from "../../../../Phones/Phone1/Phone1";
import Phone2 from "../../../../Phones/Phone2/Phone2";
import Phone3 from "../../../../Phones/Phone3/Phone3";
import Phone4 from "../../../../Phones/Phone4/Phone4";
import Phone5 from "../../../../Phones/Phone5/Phone5";
import { ProjectStyle } from "./Projects.style";

const Projects = () => {
  let stateObj = useContext(PageWrapper)
  return ( 
    <ProjectStyle 
    DarkTheme={stateObj.state.colourBrown}
     LightTheme={stateObj.state.colourNaked}
     displayFlex={""}>

      <section className="box">
        <h1>Bike Repair....</h1>
        <p>This was my first client website, built with a team using Firebase Auth,Storage and Realtime database with the React framework.</p>
        <Phone1/>
        <h1>Portfolio v1....</h1>
        <p>This was my first client website, built with a team using Firebase Auth with React.</p>
        <Phone5/>
      </section>

      <section style={{marginTop:"100px"}}
        className="box">
         <h1>Gro Pro....</h1>
          <p>Group project 2 was my secound group project learning the basic of React as a team.</p>
          <Phone4/>
          <h1>Road Map....</h1>
          <p>This guide is to help beginer developers to their path as a front end dev & or UX-UI designer.</p>
          <Phone2/>
      </section>

      <section 
        style={{justifyContent:"center"}}
        className="box">
          <h1>Fetch Foods....</h1>
          <p>This was my first time using Api’s to create a food recipe generator with vanilla java-script.</p>
        <Phone3/>
      </section>

    </ProjectStyle>
   );
}
 
export default Projects;