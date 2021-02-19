import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import Typewriter from 'typewriter-effect';
import Avatar from '@material-ui/core/Avatar';
import MyPhoto from '../Assets/Images/profile_pic.jpg'
import Carousel from 'react-material-ui-carousel'

function Home () {
  const classes = useStyles()

  const skills = [
        {
            name: "Frontend",
            description: "HTML | CSS | JS | ANGULAR | REACT"
        },
        {
            name: "Backend",
            description: "Python | Java | Scala | C++"
        },
        {
          name: "Database",
          description: "Oracle | MySQL"
        },
        {
          name: "AWS",
          description: "S3 | IAM | KMS | Cloud Formation | Glue | Lambda"
        },
        {
          name: "Tools",
          description: "JIRA | GIT | SonarQube | AWS CLI | IntelliJ | Jupyter | Zeppelin"
        },
        {
          name: "Libraries",
          description: "NumPy | Pandas | Matplotlib | TensorFlow | Keras | OpenCV"
        }
      ]

      return (
        <div>
          <Paper className={classes.paper}>
           <Avatar alt="Profile picture" src={MyPhoto} className={classes.img}/>

           <h1 className={classes.title}> Hi! I am Aashna Mahajan. </h1>
           <h2 className={classes.typewriter}>
           <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('I am a Software Engineer with experience.')
                    .deleteChars(11)
                    .typeString('<Strong>Full Stack development</Strong> experience.')
                    .pauseFor(300)
                    .deleteChars(59)
                    .typeString('always eager to learn new things.')
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
  
              />
              </h2>
           
              <h3 className={classes.title}> SKILLS  </h3>

              {/* Carousel for skills  */}
              <Carousel animation="slide" interval={3000}>
                  {
                      skills.map( (skill) => 
                      <Paper className={classes.skillCard}>
                      <h1>{skill.name}</h1> 
                      <h3>{skill.description}</h3>
                      </Paper> 
                      )
                  }
              </Carousel>
            

            

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
  skillCard: {
    padding: theme.spacing(3),
    width: theme.spacing(70),
    height: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}))

export default Home;