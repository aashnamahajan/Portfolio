import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, List, Paper, Typography } from '@material-ui/core';
import MyPhoto from '../Assets/Images/profile_pic.jpg'

function Projects () {
  const classes = useStyles()

    const projectsList = [ 
      { 
        name: 'Social Media Mining for Health Monitoring',
        img: '',
        startTime: 'Mar 2020',
        endTime: 'May 2020',
        description: ['Preprocessed and classified tweets into ADR (Adverse Drug Reactions) and Non-ADRs using BERT NLP language model.','Used CRF model to extract the ADR mentions from the tweets and then mapped those mentions to respective MedDRA terms by implementing FastText embedding along with cosine similarity.','Created a website using Angular 8 to demonstrate the end-to-end functionality of this system.']
      },
      { 
        name: 'Image Compression using K-Means clustering',
        img: '',
        startTime: 'Feb 2020',
        endTime: 'Apr 2020',
        description: ['Performed parallel implementation of image compression using K-Means clustering algorithm.','Analyzed the execution time with different number of processors (2-256), iterations and different number of clusters (colors).','Achieved up-to 70% compression by reducing the color-space and observed a speedup of up-to 60 times with 256 processors.']
      },
      { 
        name: 'Twitter Analytics Search Engine',
        img: '',
        startTime: 'Nov 2019',
        endTime: 'Nov 2019',
        description: ['Designed an end-to-end web application for a search engine on about 3 Lakh multilingual tweets across three countries.', 'Developed the system using Angular8, Python Flask and SOLR involving content ingestion, topic modeling and ranked search results with related articles.','Performed data analysis and visualization including language, sentiment and topic analysis.']
      },  
      { 
        name: 'Breast Cancer prediction using Logistic Regression Algorithm',
        img: '',
        startTime: 'Oct 2019',
        endTime: 'Oct 2019',
        description: ['Implemented a model which efficiently classifies suspected FNA cells to Benign or Malignant using the Wisconsin Diagnostic Breast Cancer dataset by applying Logistic Regression.', 'Conducted hypothesis testing and achieved prediction accuracy of 96%.']
      },
      {
        name: 'Real-Time Human Posture Recognition',
        img: '',
        startTime: 'Jan 2018',
        endTime: 'May 2018',
        description: ['Built a Computer Vision and Deep Learning based system to detect and analyze human posture.', 'Trained model with 10000 images dataset, and obtained high test accuracy of 97%.', 'Generated posture analysis report along with the posture corrections and suggestions through an Android Interface.']
      }
  ]


      return (
        <div className={classes.root}>
          {
          projectsList.map( (project) => 
          <div className={classes.row}>
            <Avatar alt="Profile picture" src={MyPhoto} className={classes.img}/>
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
    borderRadius: '8px'
  },
  img: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    borderWidth: 8, 
    borderColor: theme.palette.secondary.main,
    borderStyle:'solid'
  },
  descriptionList: {
    padding: theme.spacing(2),
    fontSize: 18,
  },
  title: {
    color: theme.palette.secondary.dark,
  },
}))

export default Projects;