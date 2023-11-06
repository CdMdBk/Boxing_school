'use strict'

const arrayAccountTabs = ['', myApplication, newApplication, userData, ''];

const arrayNavigation = document.querySelectorAll('.nav__li_font');
const buttonSubmitApplication = document.querySelector('.applications_button-style');

arrayNavigation.forEach((li, index) => {
    li.addEventListener('click', () => {
        showTab(index);
    });
});

function showTab(index) {
    account.innerHTML = arrayAccountTabs[index];
    if (index === 1) addUserApplication();

    arrayNavigation.forEach((element) => {
        element.classList.remove('nav__li_font_active');
    });
    arrayNavigation[index].classList.add('nav__li_font_active');
}

function showFormUserData() {
    document.querySelector('.log__form').style.display = 'none';
    document.querySelector('form.log__form').style.display = 'block';
}

function showUserData() {
    document.querySelector('form.log__form').addEventListener('submit', event => {
        event.preventDefault();
    });
    document.querySelector('.log__form').style.display = 'block';
    document.querySelector('form.log__form').style.display = 'none';
}