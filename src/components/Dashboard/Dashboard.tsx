import React from 'react';
import SideNavBar from '../Nav/SideNavBar';
import './Dashboard.css';
import { makeStyles } from '@material-ui/core/styles'
import TopNavBar from '../Nav/TopNavBar';
import Container from '@material-ui/core/Container'

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