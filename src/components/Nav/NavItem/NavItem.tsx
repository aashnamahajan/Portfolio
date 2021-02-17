import React  from 'react';
import './NavItem.css';
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import Link from '@material-ui/core/Link';
 import { Link, BrowserRouter as Router } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment'; 

const menuItems = [
  {
    name: 'Home',
    link: '/',
    Icon: <HomeIcon/>,
  },
  {
    name: 'Education',
    link: '/education',
    Icon: <SchoolIcon/>,
  },
  {
    name: 'Experience',
    link: '/experience',
    Icon: <WorkIcon/>,
  },
  {
    name: "Projects",
    link: '/projects',
    Icon: <AssignmentIcon/>,
  }
]

function NavItem (){

  const classes = useStyles()

    return (
      <List component="nav" className={classes.appMenu} >
        
            {   menuItems.map( (item)=> 
                  <Link to={item.link} > 
                <ListItem button className={classes.menuItem}>  
                            
                  <ListItemIcon className={classes.menuItemIcon}>
                  {item.Icon}
                  </ListItemIcon>

                 <ListItemText primary={item.name} /> 
                 
                </ListItem>
                </Link>
                
                  )  
            }
        
      </List>

      // <div>
      //   <List component="nav" className={classes.appMenu} >
          
      //       <ListItem button className={classes.menuItem}>
            
      //         <ListItemIcon className={classes.menuItemIcon}>
      //           <HomeIcon />
      //         </ListItemIcon>
      //         <ListItemText primary="Home" />
              
      //       </ListItem>
          
          
      //       <ListItem button className={classes.menuItem}>
      //       <a href="/education">
      //         <ListItemIcon className={classes.menuItemIcon}>
      //           <SchoolIcon />
      //         </ListItemIcon>
      //         <ListItemText primary="Education" />
      //       </a>
      //       </ListItem>
           
          
      //       <ListItem button className={classes.menuItem}>
      //         <ListItemIcon className={classes.menuItemIcon}>
      //           <WorkIcon />
      //         </ListItemIcon>
      //         <ListItemText primary="Experience" />
      //       </ListItem>
          
          
      //       <ListItem button className={classes.menuItem}>
      //         <ListItemIcon className={classes.menuItemIcon}>
      //           <AssignmentIcon  />
      //         </ListItemIcon>
      //         <ListItemText primary="Projects" />
      //       </ListItem>
        
      //   </List> 
      // </div>

      );
}

const drawerWidth = 200

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      // width: '100%',
    },
    menuItem: {
      // width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default NavItem;

