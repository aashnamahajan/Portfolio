import React from 'react';
import './TopNavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function TopNavBar () {
    return (
        <AppBar  position="fixed" >
          <Toolbar variant="dense" className="toolbar">
            <Typography variant="h4">
              Aashna Mahajan
            </Typography>
          </Toolbar>
        </AppBar>
    );
}


export default TopNavBar;