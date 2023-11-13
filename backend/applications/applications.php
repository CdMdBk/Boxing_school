<?php

session_start();
include '../connect.php';

$user_login = $_SESSION['user_login'];
$user_id = +$db->query("SELECT `id` FROM `users` WHERE `login` = '$user_login'")->fetch_assoc()['id'];

$response = array();
$array_applications = '';
if ($_SESSION['user_login'] === 'admin') {
    $array_applications = $db->query("SELECT * FROM `applications`");
} else {
    $array_applications = $db->query("SELECT `id`, `type_name`, `coach_name`, `time_name`, `status_name` FROM `applications` WHERE `user_id` = '$user_id'");
}


$count = 0;
while ($row = $array_applications->fetch_assoc()) {
    $response[$count]['id'] = $row['id'];

    if ($_SESSION['user_login'] === 'admin') {
        $user_id = $row['user_id'];
        $user_name = $db->query("SELECT `name` FROM `users` WHERE `id` = '$user_id'")->fetch_assoc()['name'];
        $response[$count]['user_name'] = $user_name;
    }

    $response[$count]['type_name'] = $row['type_name'];
    $response[$count]['coach_name'] = $row['coach_name'];
    $response[$count]['time_name'] = $row['time_name'];
    $response[$count]['status_name'] = $row['status_name'];

    $count++;
}

echo json_encode($response);