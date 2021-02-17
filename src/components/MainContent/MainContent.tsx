import React from 'react';
import './MainContent.css';
import Home from "../../Screens/Home"
import Education from "../../Screens/Education"
import Experience from "../../Screens/Experience"
import Projects from "../../Screens/Projects"
// import {useRoutes} from 'hookrouter';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'


// const routes = {
//   "/": () => <Home />,
//   "/education": () => <Education />,
//   "/experience": () => <Experience />,
//   "/projects": () => <Projects />
// };

function MainContent() {
 
  // const routeResult = useRoutes(routes);
  // return ( routeResult )
  const classes = useStyles()
return (
  
      <></>
  
)

}

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535451',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}))

export default MainContent;