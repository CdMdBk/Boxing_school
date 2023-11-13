<?php

include '../connect.php';

$request = json_decode(file_get_contents('php://input'), true);

$response = array();
['type_id' => $type_id, 'coach_id' => $coach_id, 'time_id' => $time_id, 'status_id' => $status_id] = $request;

$type_name = $db->query("SELECT `name` FROM `types` WHERE `id` = '$type_id'")->fetch_assoc()['name'];
$coach_name = $db->query("SELECT `name` FROM `coaches` WHERE `id` = '$coach_id'")->fetch_assoc()['name'];
$time_name = $db->query("SELECT `name` FROM `time` WHERE `id` = '$time_id'")->fetch_assoc()['name'];
$status_name = $db->query("SELECT `name` FROM `statuses` WHERE `id` = '$status_id'")->fetch_assoc()['name'];

include 'filters.php';

$count = 0;
while ($row = $array_applications->fetch_assoc()) {
    $response[$count]['id'] = $row['id'];

    $user_id = $row['user_id'];
    $user_name = $db->query("SELECT `name` FROM `users` WHERE `id` = '$user_id'")->fetch_assoc()['name'];
    $response[$count]['user_name'] = $user_name;

    $response[$count]['type_name'] = $row['type_name'];
    $response[$count]['coach_name'] = $row['coach_name'];
    $response[$count]['time_name'] = $row['time_name'];
    $response[$count]['status_name'] = $row['status_name'];
    $count++;
}

echo json_encode($response);