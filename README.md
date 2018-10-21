# Project Planner
Practice with React Redux and Firebase

# Features
- Authentication (Sign in, Sign up)
# If authenticate
  - Create project/s
  - See other projects created by other users

# Upcoming Features
- Notifications


# IMPORTANT
- create a config directory in src
- create a file named firebaseConfig.js in config directory
- add the following into the file:

  ```sh
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  // Initialize Firebase
  var config = {
      apiKey: "your_data",
      authDomain: "your_data",
      databaseURL: "your_data",
      projectId: "your_data",
      storageBucket: "your_data",
      messagingSenderId: "your_data"
    };
    firebase.initializeApp(config);
    firebase.firestore().settings({
        timestampsInSnapshots: true
    });

  export default firebase;
  ```
