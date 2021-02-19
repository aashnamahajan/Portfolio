import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { List } from '@material-ui/core';


function Experience () {
  const classes = useStyles()

  const workEx = [ 
    { 
      name: 'Amazon',
      title: 'Software Development Engineer Intern',
      location: 'New York, USA',
      startTime: 'May 2020',
      endTime: 'Aug 2020',
      description: ['Implemented a new functionality for the existing ETL jobs to run for a time range and backfill the analytics data to enable the creation of metrics and business review reports from the past data.','Worked with the AWS Glue Service and managed the data catalog using AWS Glue APIs to clean and fix the old and missing data and transform data for efficient analysis.','Optimized and wrote Spark SQL queries to retrieve partitions in a time range, reducing the fetch time by 5%.','Wrote unit test cases in Java and Scala for edge case scenarios, and increased the coverage by 7%.']
    },
    { 
      name: 'Infosys Limited',
      title: 'Software Engineer',
      location: 'Bangalore, India',
      startTime: 'Jul 2018',
      endTime: 'Jul 2019',
      description: ['Optimized backend functionalities based on client requirements using Java, Restful Web Services, and Spring MVC Framework.','Worked effectively with design teams on HTML, Bootstrap, and JSP, and resolved issues in different environments to enhance user-experience.','Performed unit and integration testing using the JUnit framework and administered SonarQube for ensuring code quality.']
    },
    { 
      name: 'Infosys Limited',
      title: 'Software Engineer Intern',
      location: 'Mysore, India',
      startTime: 'Jan 2018',
      endTime: 'May 2018',
      description: ['Designed a web portal, Question Bank, using Bootstrap and Angular, developed RESTFUL Services making API calls to Oracle DB.']
    },  
]

      return (
        <div className={classes.root}>
          <Timeline align="alternate">
            {workEx.map( (company,index) => 
                 index < workEx.length -1 ?
                        <TimelineItem>  
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            {company.startTime} - {company.endTime}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.icon}>
                            <LaptopMacIcon />
                          </TimelineDot>
                          <TimelineConnector className={classes.secondaryTail}/>
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h5" component="h1" className={classes.title} >
                              {company.title} at {company.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                            {company.location}
                          </Typography>
                            <Typography variant="body1">
                              {
                                company.description.map( c=>
                                  <List className={classes.descriptionList}>
                                    {c}
                                  </List>
                                  )
                              }
                              
                            </Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      :

                      <TimelineItem>  
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            {company.startTime} - {company.endTime}
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot className={classes.icon}>
                            <LaptopMacIcon />
                          </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h5" component="h1" className={classes.title} >
                              {company.title} at {company.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                            {company.location}
                          </Typography>
                            <Typography>
                              {
                                company.description.map( c=>
                                  <List className={classes.descriptionList}>
                                    {c}
                                  </List>
                                  )
                              }
                              
                            </Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

            )}
          </Timeline>  
      
        </div>
      );
  }

const useStyles = makeStyles(theme => ({
  root: {
    margin:theme.spacing(6), 
  },  
  paper: {
    padding: theme.spacing(4),  
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.dark,
  },
  descriptionList: {
    padding: theme.spacing(2),
    fontSize: 18,
  },
  title: {
    color: theme.palette.secondary.dark,
  },
  icon: {
    backgroundColor: '#97c05c',
  },
  
  
}))

export default Experience;