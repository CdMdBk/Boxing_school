function userAuthorization(event) {
    event.preventDefault();

    const arrayUserData = {
        login: event.target.querySelector('[name="login"]').value,
        password: event.target.querySelector('[name="password"]').value
    }

    fetch('../../backend/login/authorization.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arrayUserData)
    }).then(response => {
        return response.json();
    }).then(arrayData => {
        if (arrayData.error) {
            alert('Неверный логин или пароль');
        } else if (arrayData.answer === 'user') {
            window.location.href = 'account.php';
        } else {
            window.location.href = 'admin.php';
        }
    });
}