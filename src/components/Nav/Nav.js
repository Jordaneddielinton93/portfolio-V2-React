
import { useContext } from "react";
import { ACTIONS } from "../../Reducer/reducer";
import { PageWrapper } from "../App/App";
import { NavStyled } from "./Nav.style";

const Nav = () => {

  let stateObj = useContext(PageWrapper)
  
  return ( 
    <NavStyled DarkTheme={stateObj.state.colourBrown}>
      <ol className="nav-list">
        <li data-testid="Home">Home</li>
        <li data-testid="About">About</li>
        <li data-testid="Projects">Projects</li>
        <li data-testid="Contacts">Contacts</li>
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