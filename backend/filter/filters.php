<?php

$get_applications = '';

//filtering a single field
//$type_name $coach_name $time_name $status_name

if (!empty($type_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name'";
} elseif (!empty($coach_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE coach_name = '$coach_name'";
} elseif (!empty($time_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE time_name = '$time_name'";
} elseif (!empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE status_name = '$status_name'";
}

//filtering two fields

if (!empty($type_name) && !empty($coach_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name' AND coach_name = '$coach_name'";
} elseif (!empty($type_name) && !empty($time_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name' AND time_name = '$time_name'";
} elseif (!empty($type_name) && !empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name' AND status_name = '$status_name'";
} elseif (!empty($coach_name) && !empty($time_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE coach_name = '$coach_name' AND time_name = '$time_name'";
} elseif (!empty($coach_name) && !empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE coach_name = '$coach_name' AND status_name = '$status_name'";
} elseif (!empty($time_name) && !empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE time_name = '$time_name' AND status_name = '$status_name'";
}

//filtering three fields

if (!empty($type_name) && !empty($coach_name) && !empty($time_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name' AND coach_name = '$coach_name' AND time_name = '$time_name'";
} elseif (!empty($type_name) && !empty($coach_name) && !empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name' AND coach_name = '$coach_name' AND status_name = '$status_name'";
} elseif (!empty($type_name) && !empty($time_name) && !empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name' AND time_name = '$time_name' AND status_name = '$status_name'";
} elseif (!empty($coach_name) && !empty($time_name) && !empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE coach_name = '$coach_name' AND time_name = '$time_name' AND status_name = '$status_name'";
}

//filtering four fields

if (!empty($type_name) && !empty($coach_name) && !empty($time_name) && !empty($status_name)) {
    $get_applications = "SELECT * FROM `applications` WHERE type_name = '$type_name' AND coach_name = '$coach_name' AND time_name = '$time_name' AND status_name = '$status_name'";
}

$array_applications = $db->query($get_applications);