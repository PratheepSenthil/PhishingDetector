// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUGMBYFC4tpbsYzJOnxYNW-ZeyvY3sDj4",
    authDomain: "phishingdetector-784a9.firebaseapp.com",
    databaseURL: "https://phishingdetector-784a9.firebaseio.com",
    projectId: "phishingdetector-784a9",
    storageBucket: "",
    messagingSenderId: "1057354563182",
    appId: "1:1057354563182:web:657b697d84657abf75b07f",
    measurementId: "G-3HWSBMVW7P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
//   console.log("sfghjkfshgkfhg");
  
    var loginbtn=document.querySelector("#loginbtn");
    //  console.log(loginbtn);
    loginbtn.addEventListener("click",()=>{
        // console.log("hjghfh");      
        var un= document.querySelector("#username").value;
        var pwd=document.querySelector("#password").value;
        var flag=0;
        firebase.database().ref('users/').on('value', (snapshot) => {
            console.log(snapshot.val());      
            snapshot.forEach((e) => {
                console.log("Inside foreach");
                console.log(e.val()["name"]);
                console.log(e.val()["password"]);
                if (e.val()["name"] === un && e.val()["password"]===pwd) {
                    console.log("Logged In");
                    flag=1;
                    window.open("./main.html","_self")
                }
                
            });

            if(flag===0){
                alert("Incorrect Username or Password");
            }
        })
    });


  