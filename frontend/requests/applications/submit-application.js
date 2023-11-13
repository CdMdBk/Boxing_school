let arrayDataNewApplication = {};

document.querySelector('form.training__container').addEventListener('submit', event => {
    event.preventDefault();

    arrayDataNewApplication = {
        type_id: parseInt(event.target.querySelector('[name="types"]').value.match(/\d+/)),
        coach_id: parseInt(event.target.querySelector('[name="coaches"]').value.match(/\d+/)),
        time_id: parseInt(event.target.querySelector('[name="time"]').value.match(/\d+/)),
    }

    fetch('../../backend/applications/create-application.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arrayDataNewApplication)
    }).then(response => {
        return response.json();
    }).then(arrayData => {
        alert('Вы записались на тренировку');
        getApplications(arrayData.user);
    });
})