import { StyledBio } from "../AboutMe.style";

const AboutBio = () => {
  return ( 
    <StyledBio>
        <p  className="header_subTitle">
          As a Web Developer i spend my whole day , practically everyday learning new Technologies and creating beautiful responsive web apps/sites.
        </p>
        <p className="header_subTitle">
          I learnt the Key skills needed to become a developer from school of code bootcamp , we were regulary paired into group's and given project's to learn new skills such as responsivenes, Api's and Css/javascript frameworks
        </p>
        <p className="header_subTitle">
          By far my Favourite project built was a React bike part booking 
          system that had a signup account feature with firebase that 
          allowed admin priveledge s with a postcode Api using fetch to 
          display their location on a google map with a marker on the 
          site so the admin could pickup/dropoff bikes, giving the admin 
          acces to do CRUD operations on the site to accept , delete or 
          update the user s booking status
        </p>
      </StyledBio>
   );
}
 
export default AboutBio;