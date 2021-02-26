import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, List, Paper, Typography } from '@material-ui/core';
import posture from '../Assets/Images/posture.jpg'
import lr from '../Assets/Images/lr.jpg'
import nlp from '../Assets/Images/nlp.jpg'
import img_comp from '../Assets/Images/img_comp.jpg'
import twitter_analysis from '../Assets/Images/twitter_analysis.jpg'

function Projects () {

  const [state, setState] = useState({
      showButton: false,
      showButtonIndex: Number(null),
  });

  const classes = useStyles()

  const handleOnMouseEnter = (e : any) => {
    // e.preventDefault();
    setState({...state, 
      showButton: true,
      showButtonIndex: e
    } ) 
  };

  const handleOnMouseLeave = (e : any) => {
    // e.preventDefault();
    setState({...state, 
      showButton: false,
      showButtonIndex: Number(null)
    } ) 
  };

    const projectsList = [ 
      { 
        name: 'Social Media Mining for Health Monitoring',
        img: nlp,
        startTime: 'Mar 2020',
        endTime: 'May 2020',
        description: ['Preprocessed and classified tweets into ADR (Adverse Drug Reactions) and Non-ADRs using BERT NLP language model.','Used CRF model to extract the ADR mentions from the tweets and then mapped those mentions to respective MedDRA terms by implementing FastText embedding along with cosine similarity.','Created a website using Angular 8 to demonstrate the end-to-end functionality of this system.'],
        technologies: 'Python, HTML, CSS, JS, ANGULAR 8, Text Mining, Natural Language Processing, Machine Learning, Logistic Regression, Linear Regression' 
      },
      { 
        name: 'Image Compression using K-Means clustering',
        img: img_comp,
        startTime: 'Feb 2020',
        endTime: 'Apr 2020',
        description: ['Performed parallel implementation of image compression using K-Means clustering algorithm.','Analyzed the execution time with different number of processors (2-256), iterations and different number of clusters (colors).','Achieved up-to 70% compression by reducing the color-space and observed a speedup of up-to 60 times with 256 processors.'],
        technologies: 'Python, Image processing, K-Means Clustering, OpenMP, MPI, Cuda',
      },
      { 
        name: 'Twitter Analytics Search Engine',
        img: twitter_analysis,
        startTime: 'Nov 2019',
        endTime: 'Nov 2019',
        description: ['Designed an end-to-end web application for a search engine on about 3 Lakh multilingual tweets across three countries.', 'Developed the system using Angular8, Python Flask and SOLR involving content ingestion, topic modeling and ranked search results with related articles.','Performed data analysis and visualization including language, sentiment and topic analysis.'],
        technologies: 'Python, HTML, CSS, JS, ANGULAR 8, SOLR, Text Mining, Sentiment Analysis',
      },  
      { 
        name: 'Breast Cancer prediction using Logistic Regression Algorithm',
        img: lr,
        startTime: 'Oct 2019',
        endTime: 'Oct 2019',
        description: ['Implemented a model which efficiently classifies suspected FNA cells to Benign or Malignant using the Wisconsin Diagnostic Breast Cancer dataset by applying Logistic Regression.', 'Conducted hypothesis testing and achieved prediction accuracy of 96%.'],
        technologies: 'Python, Machine Learning, Logistic Regression',
      },
      {
        name: 'Real-Time Human Posture Recognition',
        img: posture,
        startTime: 'Jan 2018',
        endTime: 'May 2018',
        description: ['Built a Computer Vision and Deep Learning based system to detect and analyze human posture.', 'Trained model with 10000 images dataset, and obtained high test accuracy of 97%.', 'Generated posture analysis report along with the posture corrections and suggestions through an Android Interface.'],
        technologies: 'Python, Image processing, Machine Learning',
      }
  ]


      return (
        <div className={classes.root}>
          {
          projectsList.map( (project, index) => 
          <div className={classes.row} onMouseEnter={()=> handleOnMouseEnter(index)} onMouseLeave={()=> handleOnMouseLeave(index)}>
            <Avatar alt="Profile picture" src={project.img} className={classes.img}/>
            <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h5" component="h1" className={classes.title} >
                      {project.name}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                      {project.startTime} - {project.endTime}
                      </Typography>
                    <Typography variant="body1">
                        {
                          project.description.map( p=>
                            <List className={classes.descriptionList}>
                              {p}
                            </List>
                            )
                        }                              
                    </Typography>
              </Paper>
              {
              state.showButton && (state.showButtonIndex === index) && 
              <Paper className={classes.tech} > 
                  <Typography variant='h6'>
                    Technologies 
                  </Typography>
                  <p>
                  {project.technologies} 
                  </p>
                  
              </Paper>
              }
          </div>
                
         )}
         </div>
      )
  }

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(10),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    margin: '2%',
    flexDirection: 'column',
    padding: theme.spacing(10), 
    // height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    // width: theme.spacing(100)
  },
  img: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    borderWidth: 8, 
    borderColor: theme.palette.secondary.main,
    borderStyle:'solid',
    transform: 'translate(30%,0%)'
  },
  descriptionList: {
    padding: theme.spacing(2),
    fontSize: 18,
  },
  title: {
    color: theme.palette.secondary.dark,
  },
  tech: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 'bold',
    display: 'flex',
    margin: '2%',
    flexDirection: 'column',
    padding: theme.spacing(5), 
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default Projects;