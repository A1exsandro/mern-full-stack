import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { signin, signup } from '../../actions/auth'

import Icon from './icon' 
import { AUTH } from '../../constants/actionTypes'
import useStyles from './styles'
import Input from './Input'

import LoginWithGoogle from './LoginWithGoogle'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const SignUp = () => {
  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)

  const credential = process.env.REACT_APP_GOOGLE_CLOUD_CREDENTIAL 

  // SWITCH FORM TO REGISTER OR SING IN
  const switchMode = () => {
    setForm(initialState)
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()   
    if (isSignup) {
      dispatch(signup(form, history))
    } else {
      dispatch(signin(form, history))
    }
  }

  // CAPTURE INPUT VALUE
  const handleChange = (e) => setForm({ 
    ...form, [e.target.name]: e.target.value 
  })

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj
  //   const token = res?.tokenId

  //   try {
  //     dispatch({ type: AUTH, data: { result, token } })
  //     history.push('/')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const googleError = (error) => {
  //   console.log(error)
  //   alert('Google Sign In was unsuccessful. Try again later')
  // } 

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        {/* LOGO INSIDE THE FORM */}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {/* FORM TITLE */}
        <Typography component="h1" variant="h5">
          { isSignup ? 'Sign up' : 'Sign in' }
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          
          {/* <GoogleLogin
            clientId={credential} 
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" 
                onClick={renderProps.onClick} disabled={renderProps.disabled} 
                fullWidth startIcon={<Icon />} variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> */}
          <LoginWithGoogle />

          {/* CHECK IF ALREADY HAVE AN ACCOUNT */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { 
                  isSignup ? (
                    'Already have an account? Sign in' 
                    ) : (
                    "Don't have an account? Sign Up" 
                  )
                }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default SignUp
