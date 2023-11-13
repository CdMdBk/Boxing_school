<?php
    session_start();
    $login = $_SESSION['user_login'];
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="../scripts/common/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="../styles/common/bootstrap.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="../styles/common/fonts.css">
    <link rel="stylesheet" href="../styles/common/initial-styles.css">
    <link rel="stylesheet" href="../styles/common/preloader.css">
    <link rel="stylesheet" href="../styles/common/nav.css">
    <link rel="stylesheet" href="../styles/landing/header.css">
    <link rel="stylesheet" href="../styles/landing/about-us.css">
    <link rel="stylesheet" href="../styles/landing/our-services.css">
    <link rel="stylesheet" href="../styles/landing/our-coaches.css">
    <link rel="stylesheet" href="../styles/landing/sign-training.css">
    <link rel="stylesheet" href="../styles/landing/photo-album.css">
    <link rel="stylesheet" href="../styles/landing/footer.css">
    <link rel="shortcut icon" href="../images/favicon/logo.svg" type="image/x-icon">
    <title>Школа бокса</title>
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
                    <img src="../images/favicon/logo.svg" alt="logo">
                </div>
                <div class="col-md-6 nav__burger"><span></span></div>
                <ul class="col-8 col-md-12 nav__ul">
                    <li class="nav__li">
                        <a class="nav__li_font" href="#our-services">Услуги</a>
                    </li>
                    <li class="nav__li">
                        <a class="nav__li_font" href="#coaches">Тренеры</a>
                    </li>
                    <?php if ($login && $login !== 'admin') { ?>
                        <li class="nav__li">
                            <a class="nav__li_font" href="#training">Записаться</a>
                        </li>
                    <?php } ?>
                    <li class="nav__li">
                        <a class="nav__li_font" href="#photo">Фотоальбом</a>
                    </li>
                    <li class="nav__li">
                        <a class="nav__li_font" href="#footer">Контакты</a>
                    </li>
                    <?php if (empty($login)) { ?>
                        <li class="nav__li">
                            <a class="nav__li_font" href="log.php">Вход</a>
                        </li>
                    <?php } elseif ($login === 'admin') { ?>
                        <li class="nav__li">
                            <a class="nav__li_font" href="admin.php">Панель Админа</a>
                        </li>
                    <?php } else { ?>
                    <li class="nav__li">
                        <a class="nav__li_font" href="account.php">Личный кабинет</a>
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </nav>

    <header class="header">
        <div class="container">
            <div class="row header__container">
                <h1 class="col-12 header_heading">Школа бокса №1 во всей Москве</h1>

                <p class="col-12 header_font">Перчатки в подарок<br>на первой тренировке</p>

                <div class="col-12">
                    <?php if (empty($login)) { ?>
                        <a class="header_button-style" href="log.php">Записаться</a>
                    <?php } else { ?>
                        <a class="header_button-style" href="#training">Записаться</a>
                    <?php } ?>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="container" data-aos="flip-left">
            <div class="row about-us">
                <div class="about-us__box">
                    <img class="about-us__box_size" src="../images/landing/about-us/boxing.svg" alt="boxing">
                    <p class="about-us_font">Собственные методики</p>
                </div>
                <div class="about-us__box">
                    <img class="about-us__box_size" src="../images/landing/about-us/calendar.svg" alt="boxing">
                    <p class="about-us_font">Гибкий график</p>
                </div>
                <div class="about-us__box">
                    <img class="about-us__box_size" src="../images/landing/about-us/map-marker.svg" alt="boxing">
                    <p class="about-us_font">Удобное расположение</p>
                </div>
                <div class="about-us__box">
                    <img class="about-us__box_size" src="../images/landing/about-us/car.svg" alt="boxing">
                    <p class="about-us_font">Бесплатная парковка</p>
                </div>
            </div>
        </section>

        <section class="our-services" id="our-services" data-aos="flip-left">
            <div class="container">
                <div class="row our-services__container">
                    <h2 class="col-12 heading heading_font">Наши услуги</h2>
                    <div class="service">
                        <h3 class="service_heading">Индивидуальные тренировки</h3>
                        <div class="service__text-box">
                            <p>Разовое посещение</p>
                            <p>1000 руб.</p>
                        </div>
                        <div class="service__text-box">
                            <p>Абонимент на 8 посещений</p>
                            <p>9000 руб.</p>
                        </div>
                        <div class="service__text-box">
                            <p>Абонимент на 15 посещений</p>
                            <p>11000 руб.</p>
                        </div>
                        <?php if (empty($login)) { ?>
                            <a class="service__button service__button_style" href="log.php">Записаться</a>
                        <?php } else { ?>
                            <a class="service__button service__button_style" href="#training">Записаться</a>
                        <?php } ?>
                    </div>
                    <div class="service">
                        <h3 class="service_heading">Групповые тренировки</h3>
                        <div class="service__text-box">
                            <p>Разовое посещение</p>
                            <p>1000 руб.</p>
                        </div>
                        <div class="service__text-box">
                            <p>Абонимент на 8 посещений</p>
                            <p>9000 руб.</p>
                        </div>
                        <div class="service__text-box">
                            <p>Абонимент на 15 посещений</p>
                            <p>11000 руб.</p>
                        </div>
                        <?php if (empty($login)) { ?>
                            <a class="service__button service__button_style" href="log.php">Записаться</a>
                        <?php } else { ?>
                            <a class="service__button service__button_style" href="#training">Записаться</a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </section>

        <section class="container coaches" id="coaches" data-aos="flip-left">
            <h2 class="col-12 heading heading_font">Наши тренеры</h2>

            <div class="row slider">
                <div class="col-12 slider__length">
                    <div class="slider__card">
                        <img class="slider__image" src="../images/landing/our-coaches/coach-1.png" alt="coaches">
                        <div class="slider__info-box">
                            <h4 class="slider__info-box_heading">Родионов Дмитрий</h4>
                            <p class="slider__info-box_font">Тренер по боксу<br>Стаж: 5 лет</p>
                        </div>
                    </div>

                    <div class="slider__card">
                        <img class="slider__image" src="../images/landing/our-coaches/coach-2.png" alt="coaches">
                        <div class="slider__info-box">
                            <h4 class="slider__info-box_heading">Дашкова Елизавета</h4>
                            <p class="slider__info-box_font">Инструктор по боксу<br>Стаж: 21 год</p>
                        </div>
                    </div>

                    <div class="slider__card">
                        <img class="slider__image" src="../images/landing/our-coaches/coach-3.png" alt="coaches">
                        <div class="slider__info-box">
                            <h4 class="slider__info-box_heading">Дмитриев Родион</h4>
                            <p class="slider__info-box_font">Тренер по боксу<br>Стаж: 7 лет</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="coaches__switches">
                <div class="coaches__ellipse">
                    <div class="coaches__ellipse_big"></div>
                    <div class="coaches__ellipse_mini"></div>
                </div>
            </div>
        </section>

        <?php if ($login && $login !== 'admin') { ?>
            <section class="training" id="training" data-aos="flip-left">
                <div class="container">
                    <form class="row training__container" method="POST" action="log.php">
                        <h4 class="col-12 training_heading">Запись на тренировку</h4>

                        <fieldset class="training__select">
                            <select class="col-12 training__select_style" name="types">
                                <option value="" selected="true" disabled>Вид тренировки</option>
                            </select>
                            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
                        </fieldset>

                        <fieldset class="training__select">
                            <select class="col-12 training__select_style" name="coaches">
                                <option value="" selected="true"  disabled>ФИО тренера</option>
                            </select>
                            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
                        </fieldset>

                        <fieldset class="training__select">
                            <select class="col-12 training__select_style" name="time">
                                <option value="time" selected="true"  disabled>Время тренировки</option>
                            </select>
                            <img class="training__select_arrow" src="../images/general/arrow.svg" alt="arrow">
                        </fieldset>

                        <input class="col-12 training__submit training__submit_style" type="submit" value="Записаться">
                    </form>
                </div>
            </section>
        <?php } ?>

        <section class="container photo" id="photo" data-aos="flip-left">
            <h2 class="col-12 heading heading_font">Фотоальбом</h2>
            <div class="row photo__container">
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-1.png" alt="photo">
                </div>
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-2.png" alt="photo">
                </div>
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-3.png" alt="photo">
                </div>
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-4.png" alt="photo">
                </div>
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-5.png" alt="photo">
                </div>
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-6.png" alt="photo">
                </div>
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-7.png" alt="photo">
                </div>
                <div class="photo__box-image">
                    <img src="../images/landing/photo-album/photo-8.png" alt="photo">
                </div>
            </div>
        </section>
    </main>

    <footer class="footer" id="footer">
        <div class="container">
            <div class="row footer__container">
                <div class="col-7 col-md-12 footer__map">
                    <img class="footer__map_size" src="../images/landing/footer/map.png" alt="map">
                </div>

                <div class="col-5 col-md-12 footer__info">
                    <h5 class="footer__info_heading">Адрес</h5>
                    <p class="footer__info_text">г. Москва, ул. Малая-Калужская, д.9</p>
                    <h5 class="footer__info_heading">Контакты</h5>
                    <ul class="footer__link-ul">
                        <li>
                            <a href="#">
                                <img class="footer__link-ul_size" src="../images/landing/footer/twitter.svg" alt="twitter">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="footer__link-ul_size" src="../images/landing/footer/telegram.svg" alt="telegram">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="footer__link-ul_size" src="../images/landing/footer/mail.svg" alt="mail">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="footer__link-ul_size" src="../images/landing/footer/telephone.svg" alt="telephone">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img class="footer__link-ul_size" src="../images/landing/footer/facebook.svg" alt="facebook">
                            </a>
                        </li>
                    </ul>
                    <h5 class="footer__info_heading">Часы работы</h5>
                    <p class="footer__info_text">Пн-Вс 00:00-24:00</p>
                </div>
            </div>
        </div>
        <div class="col-12 footer__down">
            <h5 class="footer__down_font">Knock</h5>
        </div>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>AOS.init();</script>
    <script src="../scripts/common/preloader.js"></script>
    <script src="../scripts/common/burger-class.js"></script>
    <script src="../scripts/common/burger.js"></script>
    <script src="../scripts/landing/slider-class.js"></script>
    <script src="../scripts/landing/slider-coaches.js"></script>

    <script src="../requests/applications/related-lists.js"></script>
    <script src="../requests/applications/submit-application.js"></script>
</body>
</html>