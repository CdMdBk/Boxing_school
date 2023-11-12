const authorization = `
    <form class="row log__form" onsubmit="userAuthorization(event)">
        <fieldset class="log__button-box">
            <button class="log__button log__button_style log__button_style_active" type="button">Войти</button>
            <button class="log__button log__button_style" type="button" onclick="showRegistration();">Регистрация</button>
        </fieldset>

        <fieldset class="log__input-box">
            <label class="log_font" for="login">Логин</label>
            <input class="log__input log__input_style" type="text" id="login" name="login" placeholder="Логин">
            <label class="log_font" for="password">Пароль</label>
            <input class="log__input log__input_style" type="password" id="password" name="password" placeholder="Пароль" data-last-input>
            <input class="log__submit log__submit_style" type="submit" value="Войти">
        </fieldset>
    </form>
`;
const registration = `
    <form class="row log__form" onsubmit="userRegistration(event)">
        <fieldset class="log__button-box">
            <button class="log__button log__button_style" type="button" onclick="showAuthorization();">Войти</button>
            <button class="log__button log__button_style log__button_style_active" type="button">Регистрация</button>
        </fieldset>

        <fieldset class="log__input-box">
            <label class="log_font" for="name">Имя</label>
            <input class="log__input log__input_style" type="text" id="name" name="name" placeholder="Имя">
            <label class="log_font" for="login">Логин</label>
            <input class="log__input log__input_style" type="text" id="login" name="login" placeholder="Логин">
            <label class="log_font" for="password">Пароль</label>
            <input class="log__input log__input_style" type="password" id="password" name="password" placeholder="Пароль">
            <input class="log__submit log__submit_style" type="submit" value="Войти">
        </fieldset>
    </form>
`;

function showRegistration() {
    document.querySelector('.log__container').innerHTML = registration;
}
function showAuthorization() {
    document.querySelector('.log__container').innerHTML = authorization;
}