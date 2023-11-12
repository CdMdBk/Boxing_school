<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="../scripts/common/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="../styles/common/bootstrap.css">
    <link rel="stylesheet" href="../styles/common/fonts.css">
    <link rel="stylesheet" href="../styles/common/initial-styles.css">
    <link rel="stylesheet" href="../styles/common/preloader.css">
    <link rel="stylesheet" href="../styles/account/login/log.css">
    <link rel="shortcut icon" href="../images/favicon/logo.svg" type="image/x-icon">
    <title>Вход</title>
</head>
<body>
    <div class="preloader">
    <ul class="preloader__container">
        <li class="preloader__li" id="a"></li>
        <li class="preloader__li" id="b"></li>
        <li class="preloader__li" id="c"></li>
        <li class="preloader__li" id="d"></li>
        <li class="preloader__li" id="e"></li>
        <li class="preloader__li" id="f"></li>
        <li class="preloader__li" id="g"></li>
        <li class="preloader__li" id="h"></li>
        <li class="preloader__li" id="i"></li>
    </ul>
</div>

    <div class="log">
        <div class="container log__container">
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
        </div>
    </div>

    <script src="../scripts/common/preloader.js"></script>
    <script src="../scripts/account/switchForms.js"></script>

    <script src="../requests/login/registration.js"></script>
    <script src="../requests/login/authorization.js"></script>
</body>
</html>