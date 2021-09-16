
import { AppStyled } from "./App.style";

import Nav from "../Nav/Nav";



import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";

function App() {

  const [offSetY,setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[])


  console.log(offSetY)

  return (
    <AppStyled className="App">
      <Nav offSetY={offSetY}/>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          
        </Switch>
      </Router>
    </AppStyled>
  );
}

export default App;
