
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAIFKScid9UHW7PQIA0wjTECEgFmSTbPuE",
  authDomain: "iamlearning-2eab5.firebaseapp.com",
  databaseURL: "https://iamlearning-2eab5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iamlearning-2eab5",
  storageBucket: "iamlearning-2eab5.appspot.com",
  messagingSenderId: "280602859439",
  appId: "1:280602859439:web:140334381a18aaab8a415a",
  measurementId: "G-EG5XZ8C65T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service

var personName, bookName, bookOpinion;

function collectData(){
  personName = document.getElementById("personName").value;
  bookName = document.getElementById("bookName").value;
  bookOpinion = document.getElementById("bookOpinion").value;
}

var postCounter = 0;
var commentsRef = firebase.database().ref('posts').limitToLast(3);
commentsRef.on('value', (snapshot) =>{
  const data = snapshot.val();
  console.log(data);

  document.getElementById("card1Title").innerHTML = Object.values(data)[0].personName;
  document.getElementById("card1Header").innerHTML = Object.values(data)[0].bookName;
  document.getElementById("card1Content").innerHTML = Object.values(data)[0].bookOpinion;

  document.getElementById("card2Title").innerHTML = Object.values(data)[1].personName;
  document.getElementById("card2Header").innerHTML = Object.values(data)[1].bookName;
  document.getElementById("card2Content").innerHTML = Object.values(data)[1].bookOpinion;

  document.getElementById("card3Title").innerHTML = Object.values(data)[2].personName;
  document.getElementById("card3Header").innerHTML = Object.values(data)[2].bookName;
  document.getElementById("card3Content").innerHTML = Object.values(data)[2].bookOpinion;
});


$(document).ready(function(){
  console.log("jquery ready!");

  $( "#buttonSubmit" ).click(function() {
    collectData();
    console.log(personName);
    console.log(bookName);
    console.log(bookOpinion)


    firebase.database().ref('posts').push({personName, bookName, bookOpinion});
  });
});
