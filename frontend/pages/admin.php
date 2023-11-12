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

    <main class="container account" data-admin data-applications-available></main>

    <script src="../scripts/common/preloader.js"></script>
    <script src="../scripts/common/burger-class.js"></script>
    <script src="../scripts/common/burger.js"></script>
    <script src="../scripts/account/list-applications.js"></script>
    <script src="../scripts/account/change-user-application.js"></script>

    <script src="../requests/login/exit.js"></script>
</body>
</html>