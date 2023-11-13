<?php

session_start();
include '../connect.php';
$request = json_decode(file_get_contents('php://input'), true);
['type_name' => $type_name, 'coach_name' => $coach_name, 'time_name' => $time_name, 'status_name' => $status_name] = $request;
$response = array();

$type_id = +$bd->query("SELECT `id` FROM `types` WHERE `name` = '$type_name'")->fetch_assoc()['id'];
$coach_id = +$bd->query("SELECT `id` FROM `coaches` WHERE `name` = '$coach_name'")->fetch_assoc()['id'];

$array_types = $bd->query("SELECT * FROM `types`");
$count_types = 0;
while($row = $array_types->fetch_assoc()) {
    $response[0][$count_types] = [$row['id'], $row['name']];
    $count_types++;
}

$array_coaches = $bd->query("SELECT `id`, `name` FROM `coaches` WHERE `type_id` = '$type_id'");
$count_coaches = 0;
while($row = $array_coaches->fetch_assoc()) {
    $response[1][$count_coaches] = [$row['id'], $row['name']];
    $count_coaches++;
}

$array_time = $bd->query("SELECT `id`, `name` FROM `time` WHERE `coach_id` = '$coach_id'");
$count_time = 0;
while($row = $array_time->fetch_assoc()) {
    $response[2][$count_time] = [$row['id'], $row['name']];
    $count_time++;
}

echo json_encode($response);