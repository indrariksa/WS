function PostSignUp(namadepan,namabelakang,email,password){
    var myHeaders = new Headers();
    myHeaders.append("Login", "tugas03");
    myHeaders.append("Content-Type", "application/json");
   
    var raw = JSON.stringify({
        "email": "naufal@gmail.com",
        "namadepan": "Naufal Dekha",
        "namabelakang": "Widana",
        "alamat": "bandung barat"
    });
   
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
   
    fetch("https://eoxg3ixukn7w8oa.m.pipedream.net", requestOptions)
      .then(response => response.text())
      .then(result => GetResponse(result))
      .catch(error => console.log('error', error));
    }
  
  function PushButton(){
      namadepan=document.getElementById("namadepan").value;
      namabelakang=document.getElementById("namabelakang").value;
      email=document.getElementById("email").value;
      password=document.getElementById("password").value;
      PostSignUp(namadepan,namabelakang,email,password);
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
  }