import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA1ENx1WMlGadqYqMDg7vq88Yjq3HhTHH8",
    authDomain: "net-ninja-mario-plan-84b3d.firebaseapp.com",
    databaseURL: "https://net-ninja-mario-plan-84b3d.firebaseio.com",
    projectId: "net-ninja-mario-plan-84b3d",
    storageBucket: "net-ninja-mario-plan-84b3d.appspot.com",
    messagingSenderId: "786321014460"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  });

  export default firebase;