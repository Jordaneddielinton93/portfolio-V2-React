
import { useContext } from "react";
import { PageWrapper } from "../../App/App";
import { StyledHeader, AboutPageStyle, ThreeColumsIntro } from "./AboutMe.style";

const AboutMePage = () => {

  let stateObj = useContext(PageWrapper)

  return ( 
    <AboutPageStyle 
    DarkTheme={stateObj.state.colourBrown}
    LightTheme={stateObj.state.colourNaked}>

      <StyledHeader>
        <h1 className="header_title">Hi!, im Jordan.</h1>
        <p  className="header_subTitle">
          As a Web Developer i spend my whole day , practically everyday learning new Technologies and creating beautiful responsive web apps/sites.
        </p>
        <p className="header_subTitle">
          I learnt the Key skills needed to become a developer from school of code bootcamp , we were regulary paired into group's and given project's to learn new skills such as responsivenes, Api's and Css/javascript frameworks
        </p>
      </StyledHeader>

      <ThreeColumsIntro>

        <section className="aboutColums left-rightcolumns">

          <div className="aboutColums_boxs">
            <h1>philosophies</h1>
            <q>We are what we repeatedly do. Excellence, then, is not an act, but a habit.</q>
          </div>

          <div className="aboutColums_boxs">
            <h1>Soft Skills</h1>
            <ul>
              <li>Agile Methodologies</li>
              <li>Disney ideation</li>
              <li>Jira Workflow</li>
              <li>UserStories</li>
              <li>Assertive</li>
              <li>Scrum</li>
            </ul>
          </div>
          
        </section>

        <section className="aboutColums">

          <h1 className="aboutColums__MidTopColum">
            Web Developer
          </h1>
          <div className="aboutColums__imgContainer" >
            <div className="innerborder"></div>
          </div>

          <h1>Front End Dev</h1>
        </section>

        <section className="aboutColums left-rightcolumns">
        <h1>jordan</h1>
          
        </section>
        
      </ThreeColumsIntro>
      
      
    </AboutPageStyle>
   );
}
 
export default AboutMePage;