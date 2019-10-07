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


  var btn=document.querySelector("#signupbtn");

  
  
  btn.addEventListener("click",()=>{
    console.log("ButtonClick");
    
    var un= document.querySelector("#username").value;
    var pwd=document.querySelector("#password").value;
    var cfmpwd=document.querySelector("#cfmpassword").value;

    // firebase.database().ref('users/').on('value', (snapshot) => {
    //   console.log(snapshot.val());
    //   snapshot.forEach((e) => {
    //     console.log(e.val()["name"])
    //     if (e.val()["name"] === un) {
    //       alert("Username already exists");
    //     }
    //   });
    // })
    // setTimeout(()=>{
      if(pwd===cfmpwd){
        console.log("Signing up")
              firebase.database().ref('users/'+un).set({
              name:un,
              password:pwd
          });
          console.log("Signed up")
          flag=1
        }else{
          alert("Passwords do not match")
        }
        
        // },500)
        
      // if(flag===1){
          window.open("main.html","_self")
      // }

  })
  