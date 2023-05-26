import React from 'react'
import { AppBar, Typography } from '@material-ui/core'

import useStyle from './styles'
import memories from '../../images/play1.png'

const Navbar = () => {
  const classes = useStyle()
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
      <img className={classes.image} src={memories} alt="memories" height="60" />
    </AppBar>
  )
}

export default Navbar