function userRegistration(event) {
    event.preventDefault();

    const arrayUserData = {
        name: event.target.querySelector('[name="name"]').value,
        login: event.target.querySelector('[name="login"]').value,
        password: event.target.querySelector('[name="password"]').value
    }

    fetch('../../backend/login/registration.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arrayUserData)
    }).then(response => {
        return response.json();
    }).then(arrayData => {
        if (arrayData.error) {
            alert('Пользователь с этим именем или логином уже существует');
        } else if (arrayData.answer === 'user') {
            window.location.href = 'account.php';
        } else {
            window.location.href = 'admin.php';
        }
    });
}