
import { AppStyled } from "./App.style";

import Nav from "../Nav/Nav";



import React, {useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import { initstialState, reducer } from "../../Reducer/reducer";
import react from "react";
import ContactPage from "../Pages/ContactPage/ContactPage";

import AboutMePage from "../Pages/AboutMePage/AboutMePage";
import ProjectPage from "../Pages/ProjectsPage/ProjectPage";




export let PageWrapper= react.createContext()

function App() {
  

// useReducer for global statechange
  let [state,dispatch]=useReducer(reducer,initstialState)

  
  console.log(state)
  return (
    <PageWrapper.Provider value={{state,dispatch}}>
    <AppStyled  
    colourNaked={state.colourNaked}
    
     className="App">
      
      <Router>
      <Nav/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/Contact" component={ContactPage} />
          <Route path="/AboutMe" component={AboutMePage} />
          <Route path="/Projects" component={ProjectPage} />
        </Switch>
        
      </Router>
    </AppStyled>
    </PageWrapper.Provider>
  );
}

export default App;
