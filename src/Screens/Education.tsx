import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

function Education () {
  const classes = useStyles()
      return (
        <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
        Education
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
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}))

export default Education;