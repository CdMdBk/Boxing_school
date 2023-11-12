const arraySelectRelatedLists = [document.querySelector('select.training__select_style[name="types"]'),
    document.querySelector('select.training__select_style[name="coaches"]'),
    document.querySelector('select.training__select_style[name="time"]'),];

let [selectType, selectCoach, selectTime] = arraySelectRelatedLists;

fetch('../../backend/applications/types.php').then(response => {
    return response.json();
}).then(arrayData => {
    for (let iterator = 0; iterator < arrayData.length; iterator++) {
        selectType.innerHTML += `
            <option value="type_${arrayData[iterator].id}">${arrayData[iterator].name}</option>
        `;
    }
});

selectType.addEventListener('change', function() {
    const type_id =  +this.value.slice(this.value.indexOf('_', this.value.length));

    fetch('../../backend/applications/coaches.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({type_id})
    }).then(response => {
        return response.json();
    }).then(arrayData => {
        selectCoach.innerHTML = `
            <option value="" selected="true" disabled>Тренер</option>
        `;
        selectTime.innerHTML = `
            <option value="time" selected="true" disabled>Выберите тренера</option>
        `;

        for (let iterator = 0; iterator < arrayData.length; iterator++) {
            selectCoach.innerHTML += `
            <option value="coach_${arrayData[iterator].id}">${arrayData[iterator].name}</option>
        `;
        }
    });
});

selectCoach.addEventListener('change', function() {
    const coach_id = +this.value.slice(this.value.indexOf('_', this.value.length));

    fetch('../../backend/applications/time.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({coach_id})
    }).then(response => {
        return response.json();
    }).then(arrayData => {
        selectTime.innerHTML = `
            <option value="time" selected="true" disabled>Выберите время</option>
        `;

        for (let iterator = 0; iterator < arrayData.length; iterator++) {
            selectTime.innerHTML += `
            <option value="time_${arrayData[iterator].id}">${arrayData[iterator].name}</option>
        `;
        }
    });
});