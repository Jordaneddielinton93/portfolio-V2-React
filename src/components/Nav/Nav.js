
import { NavStyled } from "./Nav.style";

const Nav = () => {
  return ( 
    <NavStyled>
      <ol className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ol>

      <ol className="nav-list">
        <li>
          <button className="dark-theme">Dark Theme</button>
        </li>
        <li>
          <button className="light-theme">Light Theme</button>
        </li>
      </ol>
       
    </NavStyled>

   );
}
 
export default Nav;