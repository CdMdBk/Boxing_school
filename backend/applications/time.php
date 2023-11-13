<?php

include '../connect.php';
$coach_id = json_decode(file_get_contents('php://input'), true)['coach_id'];

$add_time = $db->query("SELECT `id`, `name` FROM `time` WHERE `coach_id` = '$coach_id'");

$response = array();
$count = 0;

while ($row = $add_time->fetch_assoc()) {
    $response[$count]['id'] = $row['id'];
    $response[$count]['name'] = $row['name'];
    $count++;
}

echo json_encode($response);