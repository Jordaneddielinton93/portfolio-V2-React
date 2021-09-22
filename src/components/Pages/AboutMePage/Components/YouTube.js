import { YoutubeArea } from "../AboutMe.style";

const Youtube = () => {
  return ( 
    <YoutubeArea>
        {/* reducer */}
        <iframe width="45%" height="30%" src="https://www.youtube.com/embed/Q3-l8zmP9Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        {/* useContext */}
        <iframe width="45%" height="30%" src="https://www.youtube.com/embed/Zw_Pl0kHemI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        {/* reactBlog  */}

        <iframe width="45%" height="30%" src="https://www.youtube.com/embed/Xk1qzWs65rM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        {/* codewars */}

        <iframe width="45%" height="30%" src="https://www.youtube.com/embed/TXbdlM9b5is" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </YoutubeArea>
   );
}
 
export default Youtube;