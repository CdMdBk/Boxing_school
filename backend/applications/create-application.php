<?php

session_start();
include '../connect.php';
$request = json_decode(file_get_contents('php://input'), true);

["type_id" => $type_id, "coach_id" => $coach_id, "time_id" => $time_id] = $request;

$user_login = $_SESSION['user_login'];
$user_id = +$db->query("SELECT `id` FROM `users` WHERE `login` = '$user_login'")->fetch_assoc()['id'];
$type_name = $db->query("SELECT `name` FROM `types` WHERE `id` = '$type_id'")->fetch_assoc()['name'];
$coach_name = $db->query("SELECT `name` FROM `coaches` WHERE `id` = '$coach_id'")->fetch_assoc()['name'];
$time_name = $db->query("SELECT `name` FROM `time` WHERE `id` = '$time_id'")->fetch_assoc()['name'];
$status_name = $db->query("SELECT `name` FROM `statuses` WHERE `id` = '1'")->fetch_assoc()['name'];

$db->query("INSERT INTO `applications` (`id`, `user_id`, `type_name`, `coach_name`, `time_name`, `status_name`) VALUES (NULL, '$user_id', '$type_name', '$coach_name', '$time_name', '$status_name')");


echo json_encode(array(
    'user' => true
));