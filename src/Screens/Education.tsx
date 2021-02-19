import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Card, CardContent, Typography } from '@material-ui/core';

function Education () {
  const classes = useStyles()

  const schools = [ 
      { 
      name: 'University at Buffalo, The State University of New York',
      degree: 'Master of Science in Computer Science',
      gpa: 'GPA 3.83/4.0',
      location: 'New York',
      startTime: 'Aug 2019',
      endTime: 'Dec 2020',
      courses: ['Analysis of Algorithms and Design', 'Introduction to Machine Learning', 'Information Retrieval', 'NLP and Text Mining', 'Parallel Computing', 'Distributed Systems', 'Algorithms in Modern Computing', 'Software Engineering Concepts', 'Pattern Recognition']
      },
      { 
        name: 'SRM Institute of Science and Technology',
        degree: 'Bachelor of Technology in Information Technology',
        gpa: 'GPA 9.4/10.0',
        location: 'India',
        startTime: 'Jul 2014',
        endTime: 'May 2018',
        courses: ['Data Structures', 'Statistics for Information Technology', 'Data Science and Big Data Analytics', 'Object Oriented Programming', 'Database Management Systems', 'Data Warehousing and Data Mining', 'Web Systems and Technology', 'Advanced Java Programming', 'Mobile Applications Developement']
        },   
]


      return (
        <Box className={classes.box}>
            {schools.map( (school) => 
             <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" className={classes.title}>
                      {school.name}
                  </Typography>
                
                  <div className={classes.subtitle}>
                      <Typography variant="body2" className={classes.text}>
                          {school.gpa}
                      </Typography>
                      <Typography variant="body2" className={classes.text}>
                          {school.startTime} - {school.endTime}
                      </Typography>
                  </div>

                  <div className={classes.body}>
                      <Typography variant="h5" className={classes.title}>
                          {school.degree}
                      </Typography>
                  </div>

                  <div className={classes.body}>

                      <Typography variant="h6" className={classes.courseText}>
                          Courses
                      </Typography>
                      <h3 className={classes.courseText}>
                          {school.courses.map((course)=>  
                            <li>
                              {course}
                            </li>
                          )}
                      </h3>
                  </div>

                </CardContent>
              </Card>
            )}
        </Box>
      );
  }

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(60),
    height: theme.spacing(90),
    border: 'solid',
    // borderTop: 'solid',
    borderWidth: 10,
    borderRightColor : theme.palette.secondary.light,
    borderBottomColor : theme.palette.secondary.light,
    margin: theme.spacing(6),
    padding: theme.spacing(3)
  },
  title: {
    textAlign: 'center',
    color: theme.palette.secondary.dark,
    fontWeight: 'bold'
  },
  subtitle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(6),
    justifyContent: 'space-between',
    color: theme.palette.primary.light,
  },
  pos: {
    margin: 12,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  body: {
      marginTop: theme.spacing(6),  
  },
  courseText: {
    fontWeight: 'bold',
    marginTop: theme.spacing(3), 
  }

}))

export default Education;