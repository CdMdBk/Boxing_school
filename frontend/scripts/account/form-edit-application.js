'use strict'

let editFormContainer = document.querySelector('.training__edit');
let editForm = document.querySelector('form.training__edit-box');
let application_id = '';

let selectEditTypes = '';
let selectEditCoaches = '';
let selectEditTime = '';
let selectEditStatus = '';

function showFormEditApplication(arrayData, arrayLastData) {

    editFormContainer.style.display = 'flex';
    selectEditTypes = '';
    selectEditCoaches = '';
    selectEditTime = '';
    selectEditStatus = '';

    application_id = arrayData[4];

    //сделать функцию
    for (let i = 0; i < arrayData[0].length; i++) {
        if (arrayData[0][i][1] === arrayLastData.type_name) {
            selectEditTypes += `
            <option value="type_${arrayData[0][i][0]}" selected="true">${arrayData[0][i][1]}</option>
        `;
        } else {
            selectEditTypes += `
                <option value="type_${arrayData[0][i][0]}">${arrayData[0][i][1]}</option>
            `;
        }
    }

    for (let i = 0; i < arrayData[1].length; i++) {
        if (arrayData[1][i][1] === arrayLastData.coach_name) {
            selectEditCoaches += `
                <option value="type_${arrayData[1][i][0]}" selected="true">${arrayData[1][i][1]}</option>
            `;
        } else {
            selectEditCoaches += `
                <option value="type_${arrayData[1][i][0]}">${arrayData[1][i][1]}</option>
            `;
        }
    }

    for (let i = 0; i < arrayData[2].length; i++) {
        if (arrayData[2][i][1] === arrayLastData.time_name) {
            selectEditTime += `
                <option value="type_${arrayData[2][i][0]}" selected="true">${arrayData[2][i][1]}</option>
            `;
        } else {
            selectEditTime += `
                <option value="type_${arrayData[2][i][0]}">${arrayData[2][i][1]}</option>
            `;
        }
    }

    for (let i = 0; i < arrayData[3].length; i++) {
        if (arrayData[3][i][1] === arrayLastData.status_name) {
            selectEditStatus += `
                <option value="type_${arrayData[3][i][0]}" selected="true">${arrayData[3][i][1]}</option>
            `;
        } else {
            selectEditStatus += `
                <option value="type_${arrayData[3][i][0]}">${arrayData[3][i][1]}</option>
            `;
        }
    }

    //сделать функцию
    editForm.innerHTML = `
        <h4 class="training_heading">Редактирование заявки</h4>
    `;

    editForm.innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="types_edit" required>
                <option value="" disabled>Тип тренировки</option>
                ${selectEditTypes}
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    editForm.innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="coaches_edit" required>
                <option value="" disabled>Тренер</option>
                ${selectEditCoaches}
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    editForm.innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="time_edit" required>
                <option value="" disabled>Время тренировки</option>
                ${selectEditTime}
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    editForm.innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="statuses_edit" required>
                <option value="" disabled>Статус</option>
                ${selectEditStatus}
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    editForm.innerHTML += `
        <input class="training__submit training__submit_style" type="submit" value="Сохранить" data-edit-application>
    `;

    getEditRelatedLists();

    // updateApplication();
}