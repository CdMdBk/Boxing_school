let arrayDataApplications = [["Таблица записей\r\n\r\n"]];

document.querySelector('.account__report').addEventListener('click', () => {
    const arrayApplicationsRows = document.querySelectorAll('.applications__row');

    for (let iterator = 1; iterator < arrayApplicationsRows.length; iterator++) {
        arrayDataApplications[iterator] = {
            user_name: arrayApplicationsRows[iterator].children[0].textContent.trim(),
            type_name: arrayApplicationsRows[iterator].children[1].textContent.trim(),
            coach_name: arrayApplicationsRows[iterator].children[2].textContent.trim(),
            time_name: arrayApplicationsRows[iterator].children[3].textContent.trim(),
            status_name: arrayApplicationsRows[iterator].children[4].textContent.trim()
        }
    }

    fetch('../../backend/report/report.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(arrayDataApplications)
    }).then(() => {
        alert('Таблица сформирована!');
    });
});