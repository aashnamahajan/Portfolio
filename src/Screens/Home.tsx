import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typewriter from 'typewriter-effect';

function Home () {
  const classes = useStyles()
      return (
        <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
            {/* add image */}
            <h2> Hi! I am Aashna Mahajan. </h2>
            <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('I am a software Engineer with experience.')
                    .deleteChars(11)
                    .typeString('Full Stack development experience')
                    .pauseFor(300)
                    .deleteChars(59)
                    .typeString(' always eager to learn new things.')
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
  
              />
            {/* add skills */}
              
        </Container>
      </main>
      

      );
  }

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535451',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    color: '#fff'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}))

export default Home;