import React from 'react';
import SideNavBar from '../Nav/SideNavBar';
import './Dashboard.css';
import { makeStyles } from '@material-ui/core/styles'

function Dashboard ({children}: any) {
  const classes = useStyles()
    return (
      <div className={classes.dashboard}>
        {/* <TopNavBar/> */}
        <div className={classes.container}>
          <SideNavBar/>
           
          <div className={classes.content}>
            {children}
          </div> 
      
        </div>
      </div>
    );
}

const useStyles = makeStyles(theme => ({
  dashboard: {
  },
  container: {
    display: 'flex',   
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#eceff1'
  },
}))

export default Dashboard;