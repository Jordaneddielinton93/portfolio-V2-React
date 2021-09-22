const AboutRightColumn = () => {
  return ( 
    <section className="aboutColums left-rightcolumns">

        <div className="aboutColums_boxs">
            <h1>My Spark</h1>
            <p>
              Self Teaching python by Learning the basic data-type , 
              loops ,functions and conditionals to build a project which gave me the <i style={{fontWeight:800}}>spark</i> to persue it as a career.
            </p>
            <p style={{marginTop:"20px"}}>With thanks to 
             <a style={{
               color:"blue",
               backgroundColor:"yellow"
            }} href="https://www.schoolofcode.com/"> School Of Code</a> for helping me on that journey!

            </p>
        </div>

        <div className="aboutColums_boxs">
            <h1>Hard Skills</h1>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>REACT</li>
              <li>STYLED COMPONENTS</li>
              <li>FIREBASE</li>
              <li>Jest/testing</li>
              <li>git/git-hub</li>
              <li>Photoshop</li>
              <li>AfterEffects</li>
            </ul>
          </div>
          
        </section>
   );
}
 
export default AboutRightColumn;