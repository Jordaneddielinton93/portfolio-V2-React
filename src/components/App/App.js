
import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [offSetY,setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset);


  useEffect(()=>{

    window.addEventListener("scroll",handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);

  },[])




  return (
    <div className="App">
      <Router>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
