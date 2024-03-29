import React from 'react'
import {  
	GoogleAuthProvider, 
	signInWithPopup 
} from "firebase/auth"
import { auth } from '../../services/firebase.js'
import { Button } from '@material-ui/core'

const LoginWithGoogle = () => { 

  // LOGIN FIREBASE WITH GOOGLE 
	const provider = new GoogleAuthProvider() 
  
	const loginWithGoogle = () => signInWithPopup(auth, provider) 
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
		// setInfoUser(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
		console.log(credential)
    // ...
  })

  return ( 
    <Button
      color="primary"
      onClick={loginWithGoogle}
    >
      Login With Google
    </Button> 
  )
}

export default LoginWithGoogle
