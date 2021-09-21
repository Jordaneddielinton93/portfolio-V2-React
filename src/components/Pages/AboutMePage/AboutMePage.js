
import { AboutPageStyle, ThreeColumsIntro } from "./AboutMe.style";

const AboutMePage = () => {
  return ( 
    <AboutPageStyle>
      <h3>im still learning Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas atque ipsam aperiam animi debitis, vel nihil, cum nesciunt consequuntur, ad ex tenetur. Iste eaque aliquid facere quam aut qui.</h3>
      <ThreeColumsIntro>
        <section className="aboutColums">
          <h1>jordan</h1>
        </section>

        <section className="aboutColums">
          <h1>About jordan</h1>
          <div className="aboutColums__imgContainer" >
            <div className="innerborder"></div>
          </div>
          <h1>Front End Dev</h1>
        </section>

        <section className="aboutColums">
        <h1>jordan</h1>
          
        </section>
        
      </ThreeColumsIntro>
    </AboutPageStyle>
   );
}
 
export default AboutMePage;