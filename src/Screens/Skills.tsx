import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import { List, Typography } from '@material-ui/core';

function Skills () {
  const classes = useStyles()

  const skills = [
        {
            name: "FRONTEND",
            description: ["HTML" , "CSS" , "JS" , "JQUERY" , "ANGULAR" , "REACT"]
        },
        {
            name: "BACKEND",
            description: ["PYTHON" , "JAVA" , "SCALA" , "C++"]
        },
        {
          name: "DATABASE",
          description: ["ORACLE" , "MYSQL"]
        },
        {
          name: "AWS",
          description: ["S3" , "IAM" , "KMS" , "CLOUD FORMATION" , "GLUE" , "LAMBDA"]
        },
        {
          name: "TOOLS",
          description: ["JIRA" , "GIT" , "SONARQUBE" , "AWS CLI" , "INTELLIJ" , "JUPYTER" , "ZEPPELIN"]
        },
        {
          name: "LIBRARIES",
          description: ["NUMPY" , "PANDAS" , "MATPLOTLIB" , "TENSORFLOW" , "KERAS" , "OPENCV"]
        }
      ]

      return (
        <div>
            <div className={classes.paper}>
            
                <h1 className={classes.title}> SKILL SET  </h1>

                {/* Carousel for skills  */}
                <Carousel animation="slide" interval={3000}>
                    {
                        skills.map( (skill) => 

                        <div className={classes.skillMenu}>

                        <Paper className={classes.skillCardTitle}>
                            <Typography variant="h4" component="h1"  >
                                {skill.name}
                            </Typography>
                        </Paper>

                        <Paper className={classes.skillCard}>
                            
                            <Typography variant="h5" component="h1" className={classes.skills}>
                        
                            {
                            skill.description.map( p=>
                                <List>
                                {p}
                                </List>
                                )
                            }                              
                            </Typography>
                        </Paper> 
                        </div>
                        )
                    }
                </Carousel>
            </div>
        </div>

      );
  }

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    margin: '2%',
    flexDirection: 'column',
    padding: theme.spacing(10), 
    // height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
  },
  skillMenu: {
    display: 'flex',
    flexDirection: 'row',
  },
  skillCardTitle: {
    transform: 'translate(30%,20%)',
    width: theme.spacing(40),
    height: theme.spacing(20),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  skillCard: {
    padding: theme.spacing(3),
    width: theme.spacing(80),
    height: theme.spacing(50),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    fontSize: 10,
  },
  skills: {
    padding: theme.spacing(4),
  }
}))

export default Skills;