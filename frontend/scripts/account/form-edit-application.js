'use strict'

let selectEditTypes = '';
let selectEditCoaches = '';
let selectEditTime = '';

function showFormEditApplication(arrayData) {
    let editForm = document.querySelector('.training__edit');
    editForm.style.display = 'flex';
    selectEditTypes = '';
    selectEditCoaches = '';
    selectEditTime = '';

    for (let i = 0; i < arrayData[0].length; i++) {
        selectEditTypes += `
            <option value="type_${arrayData[0][i][0]}">${arrayData[0][i][1]}</option>
        `;
    }
    for (let i = 0; i < arrayData[1].length; i++) {
        selectEditCoaches += `
            <option value="type_${arrayData[1][i][0]}">${arrayData[1][i][1]}</option>
        `;
    }
    for (let i = 0; i < arrayData[2].length; i++) {
        selectEditTime += `
            <option value="type_${arrayData[2][i][0]}">${arrayData[2][i][1]}</option>
        `;
    }

    document.querySelector('form.training__edit-box').innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="types_edit" required>
                <option value="" selected="true" disabled>Тип тренировки</option>
                ${selectEditTypes}
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    document.querySelector('form.training__edit-box').innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="coaches_edit" required>
                <option value="" selected="true" disabled>Тренер</option>
                ${selectEditCoaches}
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    document.querySelector('form.training__edit-box').innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="time_edit" required>
                <option value="" selected="true" disabled>Время тренировки</option>
                ${selectEditTime}
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    document.querySelector('form.training__edit-box').innerHTML += `
        <fieldset class="training__select">
            <select class="training__select_style" name="statuses_edit" required>
                <option value="" selected="true" disabled>Статус</option>
                <option value="status_1">На рассмотрении</option>
                <option value="status_2">Одобрен</option>
                <option value="status_3">Отклонен</option>
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>
    `;
    document.querySelector('form.training__edit-box').innerHTML += `
        <input class="training__submit training__submit_style" type="submit" value="Сохранить">
    `;

    getEditRelatedLists();
}