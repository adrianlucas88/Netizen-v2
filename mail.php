<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "pasha2366@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo " Thank you for contacting me. I will be in touch with you very soon.!";

 header( "refresh:3; url= https://netizen-world.com");

exit;

?>