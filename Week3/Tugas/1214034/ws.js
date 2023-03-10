function PostSignUp(namadepan, namabelakang, email, password) {
  var myHeaders = new Headers();
  myHeaders.append('Login', 'chapter03');
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    namadepan: namadepan,
    namabelakang: namabelakang,
    email: email,
    password: password,
    alamat: alamat,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://eonrldwzuhw39z7.m.pipedream.net?Login=Tugas03', requestOptions)
    .then((response) => response.text())
    .then((result) => GetResponse(result))
    .catch((error) => console.log('error', error));
}
function GetResponse(result) {
  document.getElementById('formsignup').innerHTML = result;
}
function PushButton() {
  namadepan = document.getElementById('namadepan').value;
  namabelakang = document.getElementById('namabelakang').value;
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  alamat = document.getElementById('alamat').value;
  PostSignUp(namadepan, namabelakang, email, password, alamat);
}
