import React from 'react';
import './TopNavBar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function TopNavBar () {

    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h4">
              Aashna Mahajan
            </Typography>
          </Toolbar>
        </AppBar>
    );
}


export default TopNavBar;