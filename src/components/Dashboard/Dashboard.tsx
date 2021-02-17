import React from 'react';
import MainContent from '../MainContent';
import SideNavBar from '../Nav/SideNavBar';
import './Dashboard.css';
import { makeStyles } from '@material-ui/core/styles'
import TopNavBar from '../Nav/TopNavBar';
import Routes from '../Routes';
import Container from '@material-ui/core/Container'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Education from '../../Screens/Education';
import Experience from '../../Screens/Experience';
import Home from '../../Screens/Home';
import Projects from '../../Screens/Projects';

function Dashboard ({children}: any) {
  const classes = useStyles()
    return (
      <div className={classes.dashboard}>
        <TopNavBar/>
        <div className={classes.container}>
          <SideNavBar/>
           
          <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
           {children}
 
          </Container>
        </main> 
        

        </div>
      </div>
    );
}

const useStyles = makeStyles(theme => ({
  dashboard: {
    height: '100%'
  },
  container: {
    display: 'flex',
    // width: '100%',    
  },
  mainContainer: {
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

export default Dashboard;