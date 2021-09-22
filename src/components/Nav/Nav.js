
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ACTIONS } from "../../Reducer/reducer";
import { PageWrapper } from "../App/App";
import { NavStyled } from "./Nav.style";

const Nav = () => {

  let stateObj = useContext(PageWrapper)
  
  return ( 
    <NavStyled
     DarkTheme={stateObj.state.colourBrown}
     LightTheme={stateObj.state.colourNaked}>
      <ol className="nav-list">
        <li data-testid="Home">
          <Link to="/">Home</Link>
        </li>
        <li data-testid="About">
          <Link to="/AboutMe"> About </Link> 
        </li>
        <li data-testid="Projects">
          <Link to="/Projects">Projects</Link>
        </li>
        <li data-testid="Contacts">
          <Link to="/Contact">Contact</Link>
        </li>
      </ol>

      <ol className="nav-list">
        <li data-testid="DarkTheme" >

          <button data-testid="DarkThemeBtn"
           className="dark-theme"
           onClick={
            ()=>stateObj.dispatch({
              type:ACTIONS.CHANGE_COLOUR,payload:"DarkTheme"
            })
            }>
            Dark Theme
          </button>
        </li>
        <li data-testid="LightTheme" >

          <button data-testid="LightThemeBtn"
          
          className="light-theme"
            onClick={
              ()=>stateObj.dispatch({
                type:ACTIONS.CHANGE_COLOUR,payload:"LightTheme"
              })
              }>
            Light Theme
          </button>
        </li>
      </ol>
       
    </NavStyled>

   );
}
 
export default Nav;