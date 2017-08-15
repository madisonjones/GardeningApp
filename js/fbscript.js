// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUj1hhm157Ukn9nn7oRO1FhdPrYOmt7PM",
    authDomain: "garden-db.firebaseapp.com",
    databaseURL: "https://garden-db.firebaseio.com",
    projectId: "garden-db",
    storageBucket: "garden-db.appspot.com",
    messagingSenderId: "448077260919"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  {
    "rules": {
      "plants": {
        ".indexOn": ["type", "commonName", "water", "light", "zone"]
      }
    }
  }
  