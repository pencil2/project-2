
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig={
      apiKey: "AIzaSyC_vrS9nogh1kSr_Z25V-PaMyhVY1Ke620",
      authDomain: "kwitter-app-5d950.firebaseapp.com",
      databaseURL: "https://kwitter-app-5d950-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-5d950",
      storageBucket: "kwitter-app-5d950.appspot.com",
      messagingSenderId: "919886475361",
      appId: "1:919886475361:web:9a9fba5f51bc42bbbc3a20"
}
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
