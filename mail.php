<?php
$to      = 'glick@lclark.edu';
$subject = $_GET['sub'];
$message = $_GET['msg'];
$headers = 'From: '.$_GET['from']."\r\n".'Reply-To:'.$_GET['from']."\r\n".'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?> 