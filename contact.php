<?php

$headers = "From: ".$_POST["email"];

$message = "Full Name: ".$_POST["fname"];
$message .= "\nMobile: ".$_POST["mobile"];
$message .= "\nEmail: ".$_POST["email"];
$message .= "\nMessage: ".$_POST["message"];

if(mail("yashgulati.g1@gmail.com","TwinQ Contact Form",$message,$headers)) {
	echo "Your Message has been sent successfully!";
}
else {
	echo "An Error Occured!";
}
?>
