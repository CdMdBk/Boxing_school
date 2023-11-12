'use strict'

const arrayButtonsSwitch = [
    document.querySelector('.nav__li:nth-child(2) > .nav__li_font'),
    document.querySelector('.nav__li:nth-child(3) > .nav__li_font'),
    document.querySelector('.nav__li:nth-child(4) > .nav__li_font'),
    document.querySelector('button.log__submit')];

const arrayAccountTabs = [
    document.querySelector('.applications'),
    document.querySelector('form.training__container'),
    document.querySelector('div.log__form'),
    document.querySelector('form.log__form')];

showHideBlocks(0);
arrayButtonsSwitch.forEach((buttonSwitch, index) => {
    buttonSwitch.addEventListener('click', () => {
        showHideBlocks(index);
    });
});

document.querySelector('form.log__form').addEventListener('submit', event => {
    event.preventDefault();
    showHideBlocks(2);

    requestUpdateUserData(event.target);
});

function showHideBlocks(index) {
    arrayAccountTabs.forEach((block, index) => {
        block.style.display = 'none';
        arrayButtonsSwitch[index].classList.remove('nav__li_font_active');
    })
    arrayAccountTabs[index].style.display = 'flex';
    arrayButtonsSwitch[index].classList.add('nav__li_font_active');
}












// const arrayAccountTabs = ['', myApplication, newApplication, userData, ''];

// const arrayNavigation = document.querySelectorAll('.nav__li_font');
// const buttonSubmitApplication = document.querySelector('.applications_button-style');
//
// arrayNavigation.forEach((li, index) => {
//     li.addEventListener('click', () => {
//         showTab(index);
//     });
// });
//
// function showTab(index) {
//     if (index === 1) {
//         addUserApplication();
//     } else {
//         account.innerHTML = arrayAccountTabs[index];
//     }
//
//     arrayNavigation.forEach((element) => {
//         element.classList.remove('nav__li_font_active');
//     });
//     arrayNavigation[index].classList.add('nav__li_font_active');
//
//     showEditApplication();
// }
//
// function showFormUserData() {
//     document.querySelector('.log__form').style.display = 'none';
//     document.querySelector('form.log__form').style.display = 'block';
// }
//
// function showUserData() {
//     document.querySelector('form.log__form').addEventListener('submit', event => {
//         event.preventDefault();
//     });
//     document.querySelector('.log__form').style.display = 'block';
//     document.querySelector('form.log__form').style.display = 'none';
// }