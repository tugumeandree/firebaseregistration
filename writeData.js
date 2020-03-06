  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDr6lJTBnUC5tUn8ELZ0itfzt1ceGOLKNk",
    authDomain: "register-75171.firebaseapp.com",
    databaseURL: "https://register-75171.firebaseio.com",
    projectId: "register-75171",
    storageBucket: "register-75171.appspot.com",
    messagingSenderId: "132432389160",
    appId: "1:132432389160:web:6fa63a3687468da428811d",
    measurementId: "G-4TK2TB35JY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }