import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbDXxLE-_N0P0tK7l-zB1o0sz9BSZ08kE",
    authDomain: "cloudprojectmanagement.firebaseapp.com",
    databaseURL: "https://cloudprojectmanagement.firebaseio.com",
    projectId: "cloudprojectmanagement",
    storageBucket: "cloudprojectmanagement.appspot.com",
    messagingSenderId: "443027752956"
  };
  
  
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  
  export default firebase;
