import React from 'react';
import './SideNavBar.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import NavItem from '../NavItem';

function SideNavBar() {
    const classes = useStyles()

    return (    
        <div className={classes.container}>
            <CssBaseline />
                <Drawer
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    <NavItem/>
                </Drawer>
        </div>
    
    )
}



const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: theme.palette.primary.light,
        color: '#fff',
      },
      container: {
        background: theme.palette.primary.light,
      },
      
  }))

export default SideNavBar;