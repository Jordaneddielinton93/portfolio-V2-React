
import { AboutPageStyle, ThreeColumsIntro } from "./AboutMe.style";
import jordIMG from "./images/chaincar.jpg"
const AboutMePage = () => {
  return ( 
    <AboutPageStyle>
      <ThreeColumsIntro>
        <section className="aboutColums">

        </section>

        <section className="aboutColums">
          <div className="aboutColums__imgContainer" >
            <img srcSet={jordIMG} alt="jordan" />
          </div>
        </section>

        <section className="aboutColums">
          
        </section>
        
      </ThreeColumsIntro>
    </AboutPageStyle>
   );
}
 
export default AboutMePage;