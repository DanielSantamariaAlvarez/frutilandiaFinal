<?php

// Llamando a los campos
$nombre = $_POST['name'];
$correo = $_POST['email'];
$telefono =$_POST['phone'];
$mensaje = $_POST['message'];
$asunto = $_POST['asunto'];

// Datos para el correo
$destinatario = "d.s.a.dan@hotmail.com";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Asunto: $asunto \n";
$carta .= "telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header("Location:index.html");

?>
