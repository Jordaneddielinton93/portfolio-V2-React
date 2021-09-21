
import { AppStyled } from "./App.style";

import Nav from "../Nav/Nav";



import React, { useEffect, useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import { initstialState, reducer } from "../../Reducer/reducer";
import react from "react";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Footer from "./Footer/Footer";
import AboutMePage from "../Pages/AboutMePage/AboutMePage";




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
        </Switch>
        
      </Router>
    </AppStyled>
    </PageWrapper.Provider>
  );
}

export default App;
