<?php

session_start();
include '../connect.php';
$request = json_decode(file_get_contents('php://input'), true);

$user_login = $_SESSION['user_login'];

$name = $request['name'];
$login = $request['login'];
$password = $request['password'];

$bd->query("UPDATE `users` SET `name` = '$name', `login` = '$login', `password` = '$password' WHERE `login` = '$user_login'");

$_SESSION['user_name'] = $name;
$_SESSION['user_login'] = $login;
$_SESSION['user_password'] = $password;

echo json_encode(array($name, $login, $password));