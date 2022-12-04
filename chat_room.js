var firebaseConfig = {
    apiKey: "AIzaSyD6vyBlT2eGCFVCeW-0ijsFjfj628an2NY",
    authDomain: "lets-chat-dfe03.firebaseapp.com",
    databaseURL: "https://lets-chat-dfe03-default-rtdb.firebaseio.com",
    projectId: "lets-chat-dfe03",
    storageBucket: "lets-chat-dfe03.appspot.com",
    messagingSenderId: "354993848",
    appId: "1:354993848:web:3a90d12d1ffa18ffb2564d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML ="Welcome   "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name" , room_name);

    window.location ="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "chat.html";
}