<?php
    session_start();

    if (empty($_SESSION['user_login'])) {
        echo '
            <h1>Время сессии закончилось, упс...</h1>
            <p>Перейдите на <a href="index.php">начальную страницу</a> для авторизации</p>
        ';
        exit();
    }
?>

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
    <link rel="stylesheet" href="../styles/common/nav.css">
    <link rel="stylesheet" href="../styles/account/users/account.css">
    <link rel="stylesheet" href="../styles/landing/sign-training.css">
    <link rel="stylesheet" href="../styles/account/admin/filter.css">
    <link rel="shortcut icon" href="../images/favicon/logo.svg" type="image/x-icon">
    <title>Админ</title>
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

    <nav class="nav">
        <div class="container">
            <div class="row nav__container">
                <div class="col-4 col-md-6 nav__logo">
                    <h2 class="nav_heading">Админ</h2>
                </div>
                <div class="col-md-6 nav__burger"><span></span></div>
                <ul class="col-8 col-md-12 nav__ul">
                    <li class="nav__li">
                        <a class="nav__li_font" href="index.php">Главная</a>
                    </li>
                    <li class="nav__li">
                        <button class="nav__li_font nav__li_font_active">Заявки</button>
                    </li>
                    <li class="nav__li">
                        <button class="nav__li_font" data-exit >Выход</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container account" data-admin data-applications-available>
        <button class="account__report account__report_font">Скачать таблицу</button>
        <button class="account__filter account__filter_appearance">Фильтры</button>
        
        <div class="applications" data-admin>
            <div class="applications__container" data-applications></div>
        </div>
    </main>

    <div class="training__edit">
        <form class="training__edit-box">
            <h4 class="training_heading">Редактирование заявки</h4>

            <fieldset class="training__select">
                <select class="training__select_style" name="types" required>
                    <option value="" selected="true" disabled>Тип тренировки</option>
                </select>
                <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
            </fieldset>

            <fieldset class="training__select">
                <select class="training__select_style" name="coaches" required>
                    <option value="" selected="true" disabled>Выберите тип тренировки</option>
                </select>
                <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
            </fieldset>

            <fieldset class="training__select">
                <select class="training__select_style" name="time" required>
                    <option value="" selected="true" disabled>Выберите тренера</option>
                </select>
                <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
            </fieldset>

            <fieldset class="training__select">
                <select class="training__select_style" name="status" required>
                    <option value="" selected="true" disabled>Выбрать статус</option>
                    <option value="status_1">На рассмотрении</option>
                    <option value="status_2">Одобрен</option>
                    <option value="status_3">Отклонен</option>
                </select>
                <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
            </fieldset>

            <input class="training__submit training__submit_style" type="submit" value="Сохранить">
        </form>
    </div>

    <form class="filter">
        <h4 class="training_heading">Запись на тренировку</h4>

        <fieldset class="training__select">
            <select class="training__select_style" name="types">
                <option value="" selected="true">Тип тренировки</option>
                <option value="type_1">Индивидуальная</option>
                <option value="type_2">Групповая</option>
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>

        <fieldset class="training__select">
            <select class="training__select_style" name="coaches">
                <option value="" selected="true">Тренер</option>
                <option value="coach_1">Родионов Дмитрий</option>
                <option value="coach_2">Дашкова Елизавета</option>
                <option value="coach_3">Дмитриев Родион</option>
                <option value="coach_4">Безруков Артур</option>
                <option value="coach_5">Антипова Мария</option>
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>

        <fieldset class="training__select">
            <select class="training__select_style" name="time">
                <option value="" selected="true">Время</option>
                <option value="time_1">9:00</option>
                <option value="time_2">14:00</option>
                <option value="time_3">19:00</option>
                <option value="time_4">12:00</option>
                <option value="time_5">16:00</option>
                <option value="time_6">9:00</option>
                <option value="time_7">16:00</option>
                <option value="time_8">20:00</option>
                <option value="time_9">11:00</option>
                <option value="time_10">17:00</option>
                <option value="time_11">16:00</option>
                <option value="time_12">20:00</option>
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>

        <fieldset class="training__select">
            <select class="training__select_style" name="status">
                <option value="" selected="true">Выбрать статус</option>
                <option value="status_1">На рассмотрении</option>
                <option value="status_2">Одобрен</option>
                <option value="status_3">Отклонен</option>
            </select>
            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
        </fieldset>

        <input class="training__submit training__submit_style" type="submit" value="Сохранить">
    </form>

    <script src="../scripts/common/preloader.js"></script>
    <script src="../scripts/common/burger-class.js"></script>
    <script src="../scripts/common/burger.js"></script>
    <script src="../scripts/account/list-applications.js"></script>
    <script src="../scripts/account/change-user-application.js"></script>
    <script src="../scripts/account/form-edit-application.js"></script>

    <script src="../requests/applications/functions-applications.js"></script>
    <script src="../requests/applications/all-applications.js"></script>
    <script src="../requests/login/exit.js"></script>
    <script src="../requests/applications/related-lists.js"></script>
    <script src="../requests/applications/update-application.js"></script>
    <script src="../requests/report/report.js"></script>

    <script src="../requests/filter/filtering.js"></script>
</body>
</html>