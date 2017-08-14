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
  
// Create a variable to reference the database.
var database = firebase.database(garden-db);

  new Firebase(database).once('value', function(snap) {
   console.log('show me data', snap.val());
});