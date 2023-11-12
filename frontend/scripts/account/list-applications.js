// const account = document.querySelector('.account');

// let myApplication = `
//     <div class="applications">
//         <h4 class="applications_heading">Здесь будут ваши заявки</h4>
//         <button class="applications_button-style" type="button" onclick="showTab(2);">Подать заявку</button>
//     </div>
// `;
// const buttonSubmitApplicationHTML = `
//     <button class="applications_button-style" data-has-applications type="button" onclick="showTab(2);">Подать заявку</button>
// `;
// const adminListApplication = `
//     <div class="applications">
//         <h4 class="applications_heading">Здесь будут заявки клиентов</h4>
//     </div>
// `;

// const headApplicationUser = `
//     <div class="applications">
//         <div class="applications__row">
//             <h5 class="applications__row_heading">Имя</h5>
//             <h5 class="applications__row_heading">Вид</h5>
//             <h5 class="applications__row_heading">Тренер</h5>
//             <h5 class="applications__row_heading">Время</h5>
//             <h5 class="applications__row_heading">Статус</h5>
//         </div>
//     </div>
// `;
// const rowApplicationUser = `
//     <div class="applications__row">
//             <p class="applications__row_font">Имя</p>
//             <p class="applications__row_font">Вид</p>
//             <p class="applications__row_font">Тренер</p>
//             <p class="applications__row_font">Время</p>
//             <p class="applications__row_font">Статус</p>
//             <button class="applications__row_button-style">Редактировать</button>
//         </div>
// `;
// let arrayButtonsEdit;

// const newApplication = `
//     <form class="row training__container" method="POST" action="#">
//         <h4 class="col-12 training_heading">Запись на тренировку</h4>
//
//         <fieldset class="training__select">
//             <select class="col-12 training__select_style" name="type">
//                 <option value="" disabled>Вид тренировки</option>
//                 <option value="individual">Индивидуальная</option>
//                 <option value="group">Групповая</option>
//             </select>
//             <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
//         </fieldset>
//
//         <fieldset class="training__select">
//             <select class="col-12 training__select_style" name="name">
//                 <option value="" disabled>ФИО тренера</option>
//                 <option value="rodionov">Родионов Дмитрий</option>
//                 <option value="dashkova">Дашкова Елизавета</option>
//                 <option value="dmitriev">Дмитриев Родион</option>
//             </select>
//             <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
//         </fieldset>
//
//         <fieldset class="training__select">
//             <select class="col-12 training__select_style" name="">
//                 <option value="time" disabled>Время тренировки</option>
//                 <option value="9">9:00</option>
//                 <option value="14">14:00</option>
//                 <option value="19">19:00</option>
//             </select>
//             <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
//         </fieldset>
//
//         <input class="col-12 training__submit training__submit_style" type="submit" value="Записаться">
//     </form>
// `;

// const userData = `
//     <div class="row log__form">
//         <div class="log__input-box" data-users>
//             <h3 class="log_font">Имя</h3>
//             <p class="log__input log__input_style">Имя</p>
//             <h3 class="log_font">Логин</h3>
//             <p class="log__input log__input_style">Логин</p>
//             <h3 class="log_font">Пароль</h3>
//             <p class="log__input log__input_style">Пароль</p>
//             <button class="log__submit log__submit_style" type="button" onclick="showFormUserData()">Изменить</button>
//         </div>
//     </div>
//
//     <form class="row log__form" method="POST" action="#" style="display: none">
//         <fieldset class="log__input-box" data-users>
//             <label class="log_font" for="name">Имя</label>
//             <input class="log__input log__input_style" type="text" id="name" name="name" placeholder="Имя">
//             <label class="log_font" for="login">Логин</label>
//             <input class="log__input log__input_style" type="text" id="login" name="login" placeholder="Логин">
//             <label class="log_font" for="password">Пароль</label>
//             <input class="log__input log__input_style" type="password" id="password" name="password" placeholder="Пароль">
//             <label class="log_font" for="copy-password">Повторите пароль</label>
//             <input class="log__input log__input_style" type="password" id="copy-password" name="password" placeholder="Повторите пароль" data-last-input>
//             <input class="log__submit log__submit_style" type="submit" value="Сохранить" onclick="showUserData();">
//         </fieldset>
//     </form>
// `;

// addUserApplication();

// function addUserApplication() {
//     if (account.hasAttribute('data-applications-available')) {
//         if (account.hasAttribute('data-users')) {
//             account.innerHTML = headApplicationUser;
//             addRowApplicationUser(3);
//             account.children[0].innerHTML += buttonSubmitApplicationHTML;
//
//             myApplication = account.innerHTML;
//             arrayButtonsEdit = document.querySelectorAll('.applications__row_button-style');
//         } else {
//             account.innerHTML = headApplicationUser;
//             addRowApplicationUser(3);
//
//             arrayButtonsEdit = document.querySelectorAll('.applications__row_button-style');
//         }
//     } else {
//         if (account.hasAttribute('data-users')) {
//             account.innerHTML = myApplication;
//         } else {
//             account.innerHTML = adminListApplication;
//         }
//     }
// }

// function addRowApplicationUser(count) {
//     for (let iterator = 0; iterator < count; iterator++) {
//         account.children[0].innerHTML += rowApplicationUser;
//     }
// }