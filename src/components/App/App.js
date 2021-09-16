
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



export let PageWrapper= react.createContext()

function App() {
// offsetY Is the scroll number
  const [offSetY,setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[])
  console.log(offSetY)


// useReducer for global statechange
  let [state,dispatch]=useReducer(reducer,initstialState)

  console.log(state)
  return (
    <PageWrapper.Provider value={{state,dispatch}}>
    <AppStyled colourNaked={state.colourNaked}
     className="App">
      <Nav offSetY={offSetY}/>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          
        </Switch>
      </Router>
    </AppStyled>
    </PageWrapper.Provider>
  );
}

export default App;
