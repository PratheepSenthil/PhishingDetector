// function hitapi(urljson){
//     var request = new XMLHttpRequest();
//     request.open('GET','https://data.phishtank.com/data/7f99deec9e01fa87114162be5cb3a64feb02f18237786a39cf9fa363bc207fa1/'+urljson,true);
//     request.onload()=>{
//         var data = JSON.parse(this.response)

//         if (request.status >= 200 && request.status < 400) {
//             console.log(data);
//         } else {
//             console.log('error')
//         }
//     }
//     request.send();
// }

var btn= document.querySelector("#submitbtn");
console.log("after Search");
btn.addEventListener("click",() => {
    console.log("Clicked")
    var url = document.querySelector("#searchbar").value;
    console.log(url);
    console.log("connected...")
    console.log(axios)
    console.log('http://checkurl.phishtank.com/checkurl/index.php?url='+url+'&format=json&app_key=7f99deec9e01fa87114162be5cb3a64feb02f18237786a39cf9fa363bc207fa1');
var data;
axios.post(
    'http://checkurl.phishtank.com/checkurl/index.php?url='+url+'&format=json&app_key=7f99deec9e01fa87114162be5cb3a64feb02f18237786a39cf9fa363bc207fa1'
    )
  .then(function (response) {
    data = response.data;
    console.log(response.data);
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data,"text/xml");
    console.log(xmlDoc.querySelector("valid").innerHTML);
    console.log("Got here");
  })
  .catch(function (error) {
    console.log(error);
  });
})
