<?php

session_start();
include '../connect.php';
$request = json_decode(file_get_contents('php://input'), true);

$login = $request['login'];
$password = $request['password'];

$add_user = $db->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");

if (!($add_user->num_rows > 0)) {
    echo json_encode(array(
        'error' => true
    ));
    exit();
}

$_SESSION['user_name'] = $add_user->fetch_assoc()['name'];
$_SESSION['user_login'] = $login;
$_SESSION['user_password'] = $password;

if ($login === 'admin') {
    echo json_encode(array(
        'answer' => 'admin'
    ));
} else {
    echo json_encode(array(
        'answer' => 'user'
    ));
}