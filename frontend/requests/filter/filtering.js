let buttonShowFilters = document.querySelector('.account__filter');
let formFilters = document.querySelector('.filter');
let arrayFilterData = {};
let countFilteringObjects = 0;

buttonShowFilters.addEventListener('click', toggleFilterContainer);

formFilters.addEventListener('submit', event => {
    event.preventDefault();
    arrayFilterData = {};
    countFilteringObjects = 0;

     if (event.target.querySelector('[name="types"]').value) {
         arrayFilterData.type_id = event.target.querySelector('[name="types"]').value.match(/\d+/)[0];
         countFilteringObjects++;
     }

    if (event.target.querySelector('[name="coaches"]').value) {
        arrayFilterData.coach_id = event.target.querySelector('[name="coaches"]').value.match(/\d+/)[0];
        countFilteringObjects++;
    }

    if (event.target.querySelector('[name="time"]').value) {
        arrayFilterData.time_id = event.target.querySelector('[name="time"]').value.match(/\d+/)[0];
        countFilteringObjects++;
    }

    if (event.target.querySelector('[name="status"]').value) {
        arrayFilterData.status_id = event.target.querySelector('[name="status"]').value.match(/\d+/)[0];
        countFilteringObjects++;
    }

    if (!countFilteringObjects) {
        alert('Укажите хотя бы один объект фильтрации');
    } else {
        toggleFilterContainer();
        fetch('../../backend/filter/filtered-applications.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(arrayFilterData)
        }).then(response => {
            return response.json();
        }).then(arrayData => {
            console.log(arrayData);

            insertApplications(arrayData, false);
        });
    }
});

function toggleFilterContainer() {
    document.querySelector('.filter').classList.toggle('filter_active');
}