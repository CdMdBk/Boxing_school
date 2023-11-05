const userData = `
    <div class="row log__form">
        <div class="log__input-box">
            <h3 class="log_font">Имя</h3>
            <p class="log__input log__input_style">Имя</p>
            <h3 class="log_font">Логин</h3>
            <p class="log__input log__input_style">Логин</p>
            <h3 class="log_font">Пароль</h3>
            <p class="log__input log__input_style">Пароль</p>
            <button class="log__submit log__submit_style" type="button" onclick="showFormUserData()">Изменить</button>
        </div>
    </div>
    
    <form class="row log__form" method="POST" action="#" style="display: none">
        <fieldset class="log__input-box">
            <label class="log_font" for="name">Имя</label>
            <input class="log__input log__input_style" type="text" id="name" name="name" placeholder="Имя">
            <label class="log_font" for="login">Логин</label>
            <input class="log__input log__input_style" type="text" id="login" name="login" placeholder="Логин">
            <label class="log_font" for="password">Пароль</label>
            <input class="log__input log__input_style" type="password" id="password" name="password" placeholder="Пароль">
            <label class="log_font" for="copy-password">Повторите пароль</label>
            <input class="log__input log__input_style" type="password" id="copy-password" name="password" placeholder="Повторите пароль" data-last-input>
            <input class="log__submit log__submit_style" type="submit" value="Сохранить">
        </fieldset>
    </form>
`;
const main = document.querySelector('.account');
const arrayNavigation = document.querySelectorAll('.nav__li_font');
const buttonShowUserData = document.querySelector('.nav__li_font[data-users="user-data"]');

buttonShowUserData.addEventListener('click', () => {
    main.innerHTML = userData;
    arrayNavigation.forEach((element) => {
        element.classList.remove('nav__li_font_active');
    });
})

function showFormUserData() {
    document.querySelector('.log__form').style.display = 'none';
    document.querySelector('form.log__form').style.display = 'flex';
}