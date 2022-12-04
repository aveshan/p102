// Your web app's Firebase configuration



//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
}



