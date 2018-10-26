# Project Planner
Practice with React Redux and Firebase

## [Live / Demo](https://net-ninja-mario-plan-84b3d.firebaseapp.com)

# Features
- Authentication (Sign in, Sign up)
# If authenticated
  - Create project/s
  - See other projects created by other users
  - Get notifications when a user creates a project or joins the application for the first time

# Upcoming Features
- Visual improvements


# IMPORTANT
> If you want to use the code, do this to make it work

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

- Add a .firebaserc file in the root directory and insert the following

  ```sh
  {
    "projects": {
      "default": "your_project_id_on_firebase"
    }
  }
  ```