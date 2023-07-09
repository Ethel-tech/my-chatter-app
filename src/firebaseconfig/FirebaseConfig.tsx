const config = {
    apiKey: "AIzaSyACdixUhxGK0soE-XmRt5ktiDk_NN7yaDk",
    authDomain: "chatter-cp23.firebaseapp.com",
    projectId: "chatter-cp23",
    storageBucket: "chatter-cp23.appspot.com",
    messagingSenderId: "41839695525",
    appId: "1:41839695525:web:6d0aba9960d25a35e45f4c",
    measurementId: "G-B9307984M1"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error(
        "No Firebase configuration object provided." +
          "\n" +
          "Add your web app's configuration object to firebase-config.ts"
      );
    } else {
      return config;
    }
  }
  