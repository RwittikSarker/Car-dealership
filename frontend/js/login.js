function login() {
  const form = document.getElementById("loginform");
  const formData = new FormData(form);
  const url = "http://localhost:3000/loginCatch";

  const request = {
    username: formData.get('username'),
    password: formData.get('password')
  };
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })    
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Logged In!');
      // window.location.href = '/customertable';
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error loggin in.');
    }
  );
}