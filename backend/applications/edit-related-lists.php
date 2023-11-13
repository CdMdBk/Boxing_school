<?php

session_start();
include '../connect.php';
$request = json_decode(file_get_contents('php://input'), true);
['application_id' => $application_id, 'type_name' => $type_name, 'coach_name' => $coach_name, 'time_name' => $time_name, 'status_name'
=> $status_name]
= $request;
$response = array();

$type_id = +$db->query("SELECT `id` FROM `types` WHERE `name` = '$type_name'")->fetch_assoc()['id'];
$coach_id = +$db->query("SELECT `id` FROM `coaches` WHERE `name` = '$coach_name'")->fetch_assoc()['id'];
$status_id = +$db->query("SELECT `id` FROM `statuses` WHERE `name` = '$status_name'")->fetch_assoc()['id'];

$array_types = $db->query("SELECT * FROM `types`");
$count = 0;
while($row = $array_types->fetch_assoc()) {
    $response[0][$count] = [$row['id'], $row['name']];
    $count++;
}
$count = 0;

$array_coaches = $db->query("SELECT `id`, `name` FROM `coaches` WHERE `type_id` = '$type_id'");
while($row = $array_coaches->fetch_assoc()) {
    $response[1][$count] = [$row['id'], $row['name']];
    $count++;
}
$count = 0;

$array_time = $db->query("SELECT `id`, `name` FROM `time` WHERE `coach_id` = '$coach_id'");
while($row = $array_time->fetch_assoc()) {
    $response[2][$count] = [$row['id'], $row['name']];
    $count++;
}
$count = 0;

$array_statuses = $db->query("SELECT * FROM `statuses`");
while($row = $array_statuses->fetch_assoc()) {
    $response[3][$count] = [$row['id'], $row['name']];
    $count++;
}

$response[4] = $application_id;

echo json_encode($response);