<?php

include '../connect.php';
$add_types = $db->query("SELECT * FROM `types`");

$response = array();
$count = 0;

while ($row = $add_types->fetch_assoc()) {
    $response[$count]['id'] = $row['id'];
    $response[$count]['name'] = $row['name'];
    $count++;
}

echo json_encode($response);