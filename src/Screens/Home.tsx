import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Typewriter from 'typewriter-effect';
import Avatar from '@material-ui/core/Avatar';
import MyPhoto from '../Assets/Images/profile_pic.jpg'

function Home () {
  const classes = useStyles()

      return (
        <div>
          <Paper className={classes.paper}>
           <Avatar alt="Profile picture" src={MyPhoto} className={classes.img}/>

           
           <h1 className={classes.typewriter}>
           <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Hi! I am Aashna Mahajan.')
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
  
              />
          </h1>

          <h2 className={classes.title}> 
            I am a Software Engineer with Full Stack Web Development Experience. I completed my Master's degree in Computer Science from the University at Buffalo, SUNY, New York. I love the field of computing and technology which allows me to build solutions to benefit the society. <br/>
          </h2>
          <h2 className={classes.title}> 
            Beside Academics, I listen to EDM music, binge watch movies, like to sing, play ukulele and basketball.
          </h2>

        </Paper>

        </div>

      );
  }

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    margin: '2%',
    flexDirection: 'column',
    padding: theme.spacing(15), 
    // height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
  },
  img: {
    width: theme.spacing(32),
    height: theme.spacing(32),
    borderWidth: 8, 
    borderColor: theme.palette.secondary.main,
    borderStyle:'solid'
  },
  title: {
    color: '#000',
  },
  typewriter: {
    color: theme.palette.secondary.dark,
  },
}))

export default Home;