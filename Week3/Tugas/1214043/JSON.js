function PostSignUp(namadepan, namabelakang, email, password, kota,) {
    var myHeaders = new Headers();
    myHeaders.append("Login", "chapter3");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      namadepan: namadepan,
      namabelakang: namabelakang,
      email: email,
      password: password,
      kota:kota
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("https://eoef1tft820ydrv.m.pipedream.net", requestOptions)
      .then((response) => response.text())
      .then((result) => GetResponse(result))
      .catch((error) => console.log("error", error));
  }
  
  function PushButton() {
    namadepan = document.getElementById("namadepan").value;
    namabelakang = document.getElementById("namabelakang").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    kota = document.getElementById("kota").value;
    

    PostSignUp(namadepan, namabelakang, email, password, kota);
  }
  
  function GetResponse(result) {
    document.getElementById("formsignup").innerHTML = result;
  }
  