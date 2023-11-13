'use strict'

let containerApplications = '';
let arrayEditButtons = [];
let arrayDataEdit = {};

function getApplications(user) {
    fetch('../../backend/applications/applications.php', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(arrayData => {

        console.log(arrayData);

        insertApplications(arrayData, user);
    });
}

function insertApplications(arrayApplications, user) {
    if (user) {
        document.querySelector('[data-applications]').innerHTML = `
        <div class="applications__row">
            <h5 class="applications__row_heading">Вид</h5>
            <h5 class="applications__row_heading">Тренер</h5>
            <h5 class="applications__row_heading">Время</h5>
            <h5 class="applications__row_heading">Статус</h5>
        </div>
    `;
    } else {
        document.querySelector('[data-applications]').innerHTML = `
        <div class="applications__row">
            <h5 class="applications__row_heading">Имя</h5>
            <h5 class="applications__row_heading">Вид</h5>
            <h5 class="applications__row_heading">Тренер</h5>
            <h5 class="applications__row_heading">Время</h5>
            <h5 class="applications__row_heading">Статус</h5>
        </div>
    `;
    }

    containerApplications = '';
    for (let iterator = arrayApplications.length - 1; iterator >= 0; iterator--) {
        if (user) {
            containerApplications += `
                <div class="applications__row" id="application_${arrayApplications[iterator].id}">
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].type_name}
                    </p>
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].coach_name}
                    </p>
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].time_name}
                    </p>
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].status_name}
                    </p>
                    <button class="applications__row_button-style">Редактировать</button>
                </div>
            `;
        } else {
            containerApplications += `
                <div class="applications__row" id="application_${arrayApplications[iterator].id}">
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].user_name}
                    </p>
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].type_name}
                    </p>
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].coach_name}
                    </p>
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].time_name}
                    </p>
                    <p class="applications__row_font">
                        ${arrayApplications[iterator].status_name}
                    </p>
                    <button class="applications__row_button-style">Редактировать</button>
                </div>
            `;
        }
    }

    document.querySelector('[data-applications]').innerHTML += containerApplications;

    searchEditButtons(user);
}

function searchEditButtons(user) {
    arrayDataEdit = {};
    arrayEditButtons = Array.from(document.querySelectorAll('.applications__row_button-style'));

    arrayEditButtons.forEach((editButton, index) => {
        editButton.addEventListener('click', event => {

            if (user) {
                arrayDataEdit = {
                    application_id: parseInt(event.target.parentElement.getAttribute('id').match(/\d+/)),
                    type_name: event.target.parentElement.children[0].innerHTML.trim(),
                    coach_name: event.target.parentElement.children[1].innerHTML.trim(),
                    time_name: event.target.parentElement.children[2].innerHTML.trim(),
                    status_name: event.target.parentElement.children[3].innerHTML.trim()
                };
            } else {
                arrayDataEdit = {
                    application_id: parseInt(event.target.parentElement.getAttribute('id').match(/\d+/)),
                    type_name: event.target.parentElement.children[1].innerHTML.trim(),
                    coach_name: event.target.parentElement.children[2].innerHTML.trim(),
                    time_name: event.target.parentElement.children[3].innerHTML.trim(),
                    status_name: event.target.parentElement.children[4].innerHTML.trim()
                };
            }

            fetch('../../backend/applications/edit-related-lists.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(arrayDataEdit)
            }).then(response => {
                return response.json();
            }).then(arrayData => {
                console.log(arrayData);
                showFormEditApplication(arrayData, arrayDataEdit);
            });
        });
    });
}