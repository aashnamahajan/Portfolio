import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "../Screens/Home"
import Education from "../Screens/Education"
import Experience from "../Screens/Experience"
import Projects from "../Screens/Projects"
import Routes from "./Routes";

function App() {
  return (
    <div className="container">
        <Routes/>    
    </div>
  );
}

export default App;
