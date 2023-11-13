function requestUpdateUserData(form) {
    const arrayUserData = {
        name: form.querySelector('input[name="name"]').value,
        login: form.querySelector('input[name="login"]').value,
        password: form.querySelector('input[name="password"]').value
    }

    fetch('../../backend/login/update.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arrayUserData)
    }).then(response => {
        return response.json();
    }).then(arrayData => {
        alert('Данные обновлены!');

        document.querySelectorAll('p.log__input').forEach((element, index) => {
            element.textContent = arrayData[index];
        });
        document.querySelector('.nav_heading').textContent = arrayData[0];
    });
}