
  // My web app's Firebase configuration
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

//where to update in html page
//the heading table1 tbody are ids/classes in index.html
var heading = document.getElementById("heading");
var table = document.querySelector('#table1 tbody');

//where to read from in the database
//the Facilitator and messages children are in the database
var headingDbRef= firebase.database().ref().child("Facilitator");
const tableDbRef = firebase.database().ref().child('messages');

//get data from the database

//reading the heading from the db can be done with the on() method
headingDbRef.on('value',function(datasnapshot){
  //post it in the html page
heading.innerHTML=datasnapshot.val();
});

  //reading the table from the db can be done with the on() method
 tableDbRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }

    var students = snap.val();
    for(var i in students) {
      var row = table.insertRow(-1);
      for(var j in students[i]) {
        cell = row.insertCell(-1);
        //post it in the html page
				cell.innerHTML = students[i][j];
			}
		}
  });
