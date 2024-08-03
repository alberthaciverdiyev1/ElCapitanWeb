document.addEventListener('DOMContentLoaded', function () {
console.log("DOMContentLoaded");

    document.querySelector(`[data-role="register"]`).addEventListener('click', async function () {
        let data = {
            email: document.getElementById(`email`).value,
            username: document.getElementById(`name`).value,
            username: document.getElementById(`surname`).value,
            password: document.getElementById(`password`).value,
            confirmPassword: document.getElementById(`confirm_password`).value,
        };
        console.log(data);
        
       const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json();
        console.log({ data: responseData});

        if (response.status === 201) {
            document.getElementById('error-msg').innerHTML = responseData.message;
            window.location.href = '/login';
        } else {
            console.error('Error:', response.status, responseData.error);
            document.getElementById('error-msg').innerHTML = responseData.error;
        }
    });

  });