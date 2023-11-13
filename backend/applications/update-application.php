<?php

session_start();
include '../connect.php';
$request = json_decode(file_get_contents('php://input'), true);

['application_id' => $application_id, 'type_id' => $type_id, 'coach_id' => $coach_id, 'time_id' => $time_id, 'statuses_id' => $statuses_id] = $request;

$user_login = $_SESSION['user_login'];
$user_id = +$db->query("SELECT `id` FROM `users` WHERE `login` = '$user_login'")->fetch_assoc()['id'];

$type_name = $db->query("SELECT `name` FROM `types` WHERE `id` = '$type_id'")->fetch_assoc()['name'];
$coach_name = $db->query("SELECT `name` FROM `coaches` WHERE `id` = '$coach_id'")->fetch_assoc()['name'];
$time_name = $db->query("SELECT `name` FROM `time` WHERE `id` = '$time_id'")->fetch_assoc()['name'];
$status_name = $db->query("SELECT `name` FROM `statuses` WHERE `id` = '$statuses_id'")->fetch_assoc()['name'];

$db->query("UPDATE `applications` SET `type_name`='$type_name',`coach_name`='$coach_name',`time_name`='$time_name',`status_name`='$status_name' WHERE `id` = '$application_id'");

$user = '';
if ($user_login !== 'admin') {
    $user = true;
}

echo json_encode([$application_id, $type_name, $coach_name, $time_name, $status_name, $user]);