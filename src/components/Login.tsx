import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAYwr-H-lYdTedUxZL9HXyJ_rpO0Ep-zmg",
    authDomain: "strength-tracker-55eed.firebaseapp.com",
    databaseURL: "https://strength-tracker-55eed.firebaseio.com",
    projectId: "strength-tracker-55eed",
    storageBucket: "strength-tracker-55eed.appspot.com",
    messagingSenderId: "332138658492",
    appId: "1:332138658492:web:337a97eb05d342fe32aeb9",
    measurementId: "G-012WCW138Z"
  };
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          // Avoid redirects after sign-in.
          signInSuccessWithAuthResult: () => false
        }
      };

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => setIsSignedIn(!!user)
        );
        return unregisterAuthObserver();
    });

    console.log("signed in: ", isSignedIn);

    return (
        <div>
            {isSignedIn ? 
                <div>
                    <p>Logged in</p>
                    <p>Welcome {firebase.auth().currentUser!.uid}! You are now signed-in!</p>
                    <a href="" onClick={() => firebase.auth().signOut()}>Sign-out</a>
                </div> :
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            }
        </div>
    );
};

export { Login };