<?php

session_start();
include '../connect.php';
$request = json_decode(file_get_contents('php://input'), true);

$name = $request['name'];
$login = $request['login'];
$password = $request['password'];

$add_users = $db->query("SELECT * FROM `users`");

while ($row = $add_users->fetch_assoc()) {
    if ($row['name'] === $name || $row['login'] === $login) {
        echo json_encode(array(
            'error' => true
        ));
        exit();
    }
}

$_SESSION['user_name'] = $name;
$_SESSION['user_login'] = $login;
$_SESSION['user_password'] = $password;

$db->query("INSERT INTO `users` (`id`, `name`, `login`, `password`) VALUES (NULL, '$name', '$login', '$password')");

if ($login === 'admin') {
    echo json_encode(array(
        'answer' => 'admin'
    ));
} else {
    echo json_encode(array(
        'answer' => 'user'
    ));
}