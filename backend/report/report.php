<?php

$request = json_decode(file_get_contents('php://input'), true);

$text = $request[0][0];
$file = '../../report.txt';

file_put_contents($file, $text);

for ($iterator = 1; $iterator < count($request); $iterator++) {
    $text = 'Имя:   '.$request[$iterator]['user_name']."\r\nВид:   ".$request[$iterator]['type_name']."\r\nТренер:   "
        .$request[$iterator]['coach_name']."\r\nВремя:   ".$request[$iterator]['time_name']."\r\nСтатус:   "
        .$request[$iterator]['status_name']."\r\n\r\n";

    file_put_contents($file, PHP_EOL . $text, FILE_APPEND);
}