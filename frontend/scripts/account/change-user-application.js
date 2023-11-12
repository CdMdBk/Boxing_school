// let editTab = document.createElement('div')
// editTab.classList.add('application__bg');
// editTab.innerHTML = `
//     <form class="row training__container" data-admin method="POST" action="#">
//         <h4 class="col-12 training_heading">Редактировать заявку</h4>
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
//             <select class="col-12 training__select_style" name="time">
//                 <option value="time" disabled>Время тренировки</option>
//                 <option value="9">9:00</option>
//                 <option value="14">14:00</option>
//                 <option value="19">19:00</option>
//             </select>
//             <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
//         </fieldset>
//
//         <fieldset class="training__select">
//             <select class="col-12 training__select_style" name="status">
//                 <option value="" disabled>Статус</option>
//                 <option value="under-consideration">На рассмотрении</option>
//                 <option value="approved">Одобрен</option>
//                 <option value="rejected"Отклонён</option>
//             </select>
//             <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
//         </fieldset>
//
//         <input class="col-12 training__submit training__submit_style" type="submit" value="Сохранить" onclick="deleteEditTab();">
//     </form>
// `;

// showEditApplication();
//
// function showEditApplication() {
//     arrayButtonsEdit.forEach((buttonEdit, index) => {
//         buttonEdit.addEventListener('click', () => {
//             account.after(editTab);
//         });
//     });
// }
//
// function deleteEditTab() {
//     editTab.remove();
// }