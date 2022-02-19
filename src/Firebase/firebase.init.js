import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;


/* steps for authentication
-----------------
Step-1: Initial setup
  1. Create a project on firebase
  2. Create a web app
  3. Add firebase config file
  4. Create firebase init file
  5. Enable auth method

Step-2: 
  1. Create login component
  2. Create register component
  3. Create route for login and register

Step-3:
  1. Create Google login 
  2. Create log out 
  3. Create ovserver
  4. return necessary props from useFirebase

Step-4:
  1. Create authprovider
  2. Create useauth
  3. Use authprovider on app js

Step: 5:
  1. Create private route
  2. Set private route

Step: 6
  1. Redirect user after log in
*/ 