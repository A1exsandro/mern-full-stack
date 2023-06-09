import React, { useState } from 'react'
import {  
	GoogleAuthProvider, 
	signInWithPopup, 
	createUserWithEmailAndPassword 
} from "firebase/auth"
import { auth } from '../../services/firebase.js'

const LoginWithGoogle = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('') // to make them

  // LOGIN FIREBASE WITH EMAIL  
	const loginWithEmail = () => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
  })

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
    <div>
      Login With Google
      <button
        onClick={loginWithGoogle}
      >
        Login With Google
      </button>
    </div>
  )
}

export default LoginWithGoogle
