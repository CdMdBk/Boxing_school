'use strict'

const formEditApplications = document.querySelector('.training__edit-box');
let updateData = {};

formEditApplications.addEventListener('submit', event => {
    event.preventDefault();

    formEditApplications.querySelector('[name="types_edit"]')

    updateData = {
        type_id: parseInt(formEditApplications.querySelector('[name="types_edit"]').value.match(/\d+/)),
        coach_id: parseInt(formEditApplications.querySelector('[name="coaches_edit"]').value.match(/\d+/)),
        time_id: parseInt(formEditApplications.querySelector('[name="time_edit"]').value.match(/\d+/)),
        statuses_id: parseInt(formEditApplications.querySelector('[name="statuses_edit"]').value.match(/\d+/))
    }

    console.log(updateData);
});