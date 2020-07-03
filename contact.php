<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   empty($_POST['asunto'])
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$asunto = strip_tags(htmlspecialchars($_POST['asunto']));
$message = strip_tags(htmlspecialchars($_POST['message']));

   
// Create the email and send the message
$to = 'd.s.a.dan@hotmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contacto Frutilandia:  $name";
$email_body = "Haz recibido un mensaje de la web de Frutilandia.\n\n"."Aquí más detalles:\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nAsunto:$asunto\n\nMessage:\n$message";
$headers = "From: noreply@frutilandia.com.co\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>