import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

function Experience () {
  const classes = useStyles()

  const workEx = [ 
    { 
    name: '',
    location: '',
    startTime: '',
    endTime: '',
    description: ['','','','']
    },
    { 
      name: '',
      location: '',
      startTime: '',
      endTime: '',
      description: ['','','','']
    },
    { 
      name: '',
      location: '',
      startTime: '',
      endTime: '',
      description: ['','','','']
    },  
]

      return (
        <div>
            Experience
        </div>
      );
  }

const useStyles = makeStyles(theme => ({
  
}))

export default Experience;