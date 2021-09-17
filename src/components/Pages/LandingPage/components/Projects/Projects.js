import Phone1 from "../../../../Phones/Phone1/Phone1";
import Phone2 from "../../../../Phones/Phone2/Phone2";
import { ProjectStyle } from "./Projects.style";

const Projects = () => {
  return ( 
    <ProjectStyle displayFlex={""}>

      <section className="box">
        <h1>Bike Repair....</h1>
        <p>This was my first client website, built with a team using Firebase Auth with React</p>
        <Phone1/>
        <h1>Bike Repair....</h1>
        <p>This was my first client website, built with a team using Firebase Auth with React</p>
        <Phone2/>
      </section>

      <section style={{marginTop:"100px"}}
        className="box">
         <h1>Bike Repair....</h1>
          <p>This was my first client website, built with a team using Firebase Auth with React</p>
       <Phone1/>
          <h1>Bike Repair....</h1>
          <p>This was my first client website, built with a team using Firebase Auth with React</p>
        <Phone2/>
      </section>

      <section 
        style={{justifyContent:"center"}}
        className="box">
          <h1>Bike Repair....</h1>
          <p>This was my first client website, built with a team using Firebase Auth with React</p>
        <Phone1/>
      </section>

    </ProjectStyle>
   );
}
 
export default Projects;