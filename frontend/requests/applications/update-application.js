'use strict'

let updateData = {};

editForm.addEventListener('submit', event => {
    event.preventDefault();

    editFormContainer.style.display = 'none';

    updateData = {
        application_id: application_id,
        type_id: parseInt(editForm.querySelector('[name="types_edit"]').value.match(/\d+/)),
        coach_id: parseInt(editForm.querySelector('[name="coaches_edit"]').value.match(/\d+/)),
        time_id: parseInt(editForm.querySelector('[name="time_edit"]').value.match(/\d+/)),
        statuses_id: parseInt(editForm.querySelector('[name="statuses_edit"]').value.match(/\d+/))
    }

    fetch('../../backend/applications/update-application.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    }).then(response => {
        return response.json();
    }).then(arrayData => {
        if (arrayData[5]) {
            document.querySelector(`#application_${arrayData[0]}`).children[0].textContent = arrayData[1];
            document.querySelector(`#application_${arrayData[0]}`).children[1].textContent = arrayData[2];
            document.querySelector(`#application_${arrayData[0]}`).children[2].textContent = arrayData[3];
            document.querySelector(`#application_${arrayData[0]}`).children[3].textContent = arrayData[4];
        } else {
            document.querySelector(`#application_${arrayData[0]}`).children[1].textContent = arrayData[1];
            document.querySelector(`#application_${arrayData[0]}`).children[2].textContent = arrayData[2];
            document.querySelector(`#application_${arrayData[0]}`).children[3].textContent = arrayData[3];
            document.querySelector(`#application_${arrayData[0]}`).children[4].textContent = arrayData[4];
        }
    });
});