function PostSignUp(fullname,email,country,phone_number,password){
    var myHeaders = new Headers();
    myHeaders.append("Login", "dimas123");
    myHeaders.append("Content-Type", "application/json");
   
    var raw = JSON.stringify({
      "fullname": fullname,
      "email": email,
      "country": country,
      "phone_number": phone_number,
      "password": password
    });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eomrg36udm00vdw.m.pipedream.net?Login=dimas123", requestOptions)
  .then(response => response.text())
  .then(result => GetResponse(result))
  .catch(error => console.log('error', error));
}

function PushButton(){
    fullname=document.getElementById("fullname").value;
    email=document.getElementById("email").value;
    country=document.getElementById("country").value;
    phone_number=document.getElementById("phone_number").value;
    password=document.getElementById("password").value;
    PostSignUp(fullname,email,country,phone_number,password);
  }
  
function GetResponse(){ 
    document.getElementById("pesan").innerHTML = "<p class='py-3 bg-green-500 text-white w-full rounded text-center'>Sign Up Success !!!</p>";
}