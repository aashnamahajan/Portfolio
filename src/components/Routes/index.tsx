import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Education from "../../Screens/Education";
import Experience from "../../Screens/Experience";
import Home from "../../Screens/Home";
import Projects from "../../Screens/Projects";
import Skills from "../../Screens/Skills";
import Dashboard from "../Dashboard";

function Routes() {

    return (
          <Router>
                <Dashboard>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/education" component={Education} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/projects" component={Projects} />
                  </Switch>
                </Dashboard>
    
          </Router>
    );
  }

  export default Routes;