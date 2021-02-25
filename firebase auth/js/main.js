const firebaseConfig = {
  apiKey: "AIzaSyAIFKScid9UHW7PQIA0wjTECEgFmSTbPuE",
  authDomain: "iamlearning-2eab5.firebaseapp.com",
  databaseURL: "https://iamlearning-2eab5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iamlearning-2eab5",
  storageBucket: "iamlearning-2eab5.appspot.com",
  messagingSenderId: "280602859439",
  appId: "1:280602859439:web:140334381a18aaab8a415a",
  measurementId: "G-EG5XZ8C65T"
};

function signInWithEmailPassword(email, password) {
  var _email = email;
  var _password = password;
  // [START auth_signin_password]
  firebase.auth().signInWithEmailAndPassword(_email, _password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("sign in success");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("sign in fail");
      console.log(errorMessage);
    });
  // [END auth_signin_password]
}

function signUpWithEmailPasswoerd(email, password) {
  var _email = email;
  var _password = password;
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(_email, _password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_signup_password]
}

function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
    });
  // [END auth_send_email_verification]
}

function sendPasswordReset(email) {
  var _email = email;
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}


function collectLoginData(){
	var signMail, signPass;

  	signMail = document.getElementById("mail").value;
  	signPass = document.getElementById("password").value;

  	return {
        mail: signMail,
        password: signPass,
    };
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


$(document).ready(function(){
  console.log("jquery ready!");

  $( "#submitButton" ).click(function() {
  	var credentials = collectLoginData();

    console.log(credentials.mail);
    console.log(credentials.password);

    signInWithEmailPassword(credentials.mail, credentials.password);
  });
});

