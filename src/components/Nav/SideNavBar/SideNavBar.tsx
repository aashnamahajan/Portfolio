import React from 'react';
import './SideNavBar.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import NavItem from '../NavItem';
import { Box, Button, Typography } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';

const icons = [ 
    { 
    Icon: <LinkedInIcon/>
    },
    { 
    Icon: <EmailIcon/>
    },
    { 
    Icon: <GitHubIcon/>
    },
    
]

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
                    <Box textAlign="center">
                        <Typography variant="h5" >
                            Aashna Mahajan
                        </Typography>
                    </Box>
                    
                    <NavItem/>

                    
                    <div className={classes.iconMenu}>
                    { icons.map( (item)=> <Button className={classes.iconList}> {item.Icon} </Button>) }
                    </div>
               
               
                </Drawer>
        </div>
    
    )
}



const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        paddingTop: theme.spacing(6),
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      },
      container: {
        background: theme.palette.primary.light,
      },
      iconList: {
         color: '#97c05c', 
      },
      iconMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "fixed",
        bottom: theme.spacing(2),
        left: theme.spacing(2),
      }
      
  }))

export default SideNavBar;