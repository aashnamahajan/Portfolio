import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Typewriter from 'typewriter-effect';
import Avatar from '@material-ui/core/Avatar';
import MyPhoto from '../Assets/Images/profile_pic.jpg'

function Home () {
  const classes = useStyles()
      return (
        <div>
          <Paper className={classes.paper}>
           <Avatar alt="Profile picture" src={MyPhoto} className={classes.img}/>

           <h2> Hi! I am Aashna Mahajan. </h2>
           <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('I am a software Engineer with experience.')
                    .deleteChars(11)
                    .typeString('<Strong>Full Stack development</Strong> experience')
                    .pauseFor(300)
                    .deleteChars(58)
                    .typeString('always eager to learn new things.')
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
  
              />
           


            

            <Grid container spacing={10}>
              <Grid item>
                    <Typography variant="subtitle1">
                      SKILLS
                    </Typography>
              </Grid>
              <Grid item>
                    <Typography variant="subtitle1">
                      Frontend
                    </Typography>
                    <Typography variant="subtitle1">
                      Backend
                    </Typography>
                    <Typography variant="subtitle1">
                      Database
                    </Typography>
              </Grid>
              <Grid item>
                    <Typography variant="subtitle1">
                      HTML | CSS | JS | ANGULAR | REACT 
                    </Typography>
                    <Typography variant="subtitle1">
                      PYTHON | JAVA | SCALA | C++ 
                    </Typography>
                    <Typography variant="subtitle1">
                      HTML | CSS | JS | ANGULAR | REACT 
                    </Typography>
              </Grid>
            </Grid>

      </Paper>
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
    borderRadius: '8px'
  },
  img: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    borderWidth: 8, borderColor: '#97c05c',
    borderStyle:'solid'
  },
}))

export default Home;