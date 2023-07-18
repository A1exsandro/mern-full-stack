import React from 'react'
import { Container } from '@material-ui/core' 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
 
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth' 
import LoginWithGoogle from './components/Auth/LoginWithGoogle'

const App = () => { 

  return (
    <BrowserRouter>
      <Container maxWidth="lg">  
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} /> 
        <Route path='/login-with-google' exact component={LoginWithGoogle} />
      </Switch>
    </Container>
    </BrowserRouter> 
  )
}

export default App
