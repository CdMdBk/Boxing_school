<?php

include '../connect.php';
$type_id = json_decode(file_get_contents('php://input'), true)['type_id'];

$add_coaches = $db->query("SELECT `id`, `name` FROM `coaches` WHERE `type_id` = '$type_id'");

$response = array();
$count = 0;

while ($row = $add_coaches->fetch_assoc()) {
    $response[$count]['id'] = $row['id'];
    $response[$count]['name'] = $row['name'];
    $count++;
}

echo json_encode($response);