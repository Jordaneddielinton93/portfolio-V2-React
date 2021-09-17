import { useContext } from "react";
import { PageWrapper } from "../../../../App/App";
import Phone1 from "../../../../Phones/Phone1/Phone1";
import Phone2 from "../../../../Phones/Phone2/Phone2";
import Phone3 from "../../../../Phones/Phone3/Phone3";
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
        <p>This was my first client website, built with a team using Firebase Auth,Storage and Realtime database with React</p>
        <Phone1/>
        <h1>Bike Repair....</h1>
        <p>This was my first client website, built with a team using Firebase Auth with React</p>
        <Phone1/>
      </section>

      <section style={{marginTop:"100px"}}
        className="box">
         <h1>Road Map....</h1>
          <p>This guide is to help beginer developers to their path as a front end dev & or UX-UI designer</p>
          <Phone2/>
          <h1>Road Map....</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, neque harum facere fuga dolore odio. Modi amet voluptatibus fuga maxime quibusdam, corrupti repudiandae voluptatum enim rem unde recusandae, impedit sequi.</p>
          <Phone1/>
      </section>

      <section 
        style={{justifyContent:"center"}}
        className="box">
          <h1>Fetch Foods....</h1>
          <p>This was my first time using Api’s to create a food recipe generator with vanilla java-script</p>
        <Phone3/>
      </section>

    </ProjectStyle>
   );
}
 
export default Projects;