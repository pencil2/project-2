
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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });
  }

   localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' ># "+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function redirectToRoomName(name)
 {
console.log(name);
localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
 }
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location = "index.html";
  }
  function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});


   document.getElementById("msg").value = "";
  }