<?php

include "../connect.php";

$response = array();
$a = $db->query("SELECT * FROM `applications` ORDER BY `coach_name`");

$count = 0;
while ($row = $a->fetch_assoc()) {
    $response[$count] = $row;
    $count++;
}

echo json_encode($response);