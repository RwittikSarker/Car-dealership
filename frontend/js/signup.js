function signup() {
    const form = document.getElementById("signupform");
    const formData = new FormData(form);
    const url = "http://localhost:3000/signinCatch";

    const request = {
        username: formData.get('username'),
        password: formData.get('password'),
        name: formData.get('fname'),
        email: formData.get('email'),
        phone: formData.get('phone')
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
            alert('Signed Up!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error signing up.');
        }
        );
}