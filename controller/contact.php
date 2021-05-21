<?php

require('vendor/autoload.php');

use Respect\Validation\Validator as v;
use \PHPMailer\PHPMailer\PHPMailer as PHPMailer;

$errors = [];

if (!empty($_POST)) {
    
    $safe = array_map('trim', array_map('strip_tags', $_POST));

    if (!v::length(20, 1000)->validate($safe['message'])) {
        $errors[] = 'Le message doit comporter entre 30 et 1000 caractères maximum.';
    }
    if (!v::length(2, 30)->validate($safe['name'])) {
        $errors[] = 'Le nom doit comporter entre 2 et 30 caractères maximum.';
    }
    if (!v::email()->validate($safe['email'])) {
        $errors[] = 'Le format de l\'email n\'est pas valide.';
    }
    if (!v::phone()->validate($safe['phone'])) {
        $errors[] = 'Le format du téléphone n\'est pas valide.';
    }

    if (count($errors) === 0) {

        try {

            include('config.php');
            $mail = new PHPmailer;
            $mail->CharSet    = 'UTF-8';
            $mail->Encoding   = 'base64';
            $mail->isSMTP();
            $mail->SMTPSecure = PHPmailer::ENCRYPTION_SMTPS;
            $mail->Host       = $config['email_smtp_host'];
            $mail->Port       = 465;
            $mail->SMTPAuth   = true;
            $mail->Username   = $config['email_smtp_username'];
            $mail->Password   = $config['email_smtp_password'];

            $mail->setFrom("contact@quentinmoneger.fr");
            $mail->addAddress("quentin.moneger@protonmail.com");

            $mail->isHTML(true);

            $subject = "Contact quentinmoneger.fr";
            $contentEmail = '
            Nom => ' . $safe['name'] . '<br>
            Email => ' . $safe['email'] . '<br>
            Téléphone => ' . $safe['phone'] . '<br>
            Message: <br>
            ' . nl2br($safe['message']) . ' ';

            $mail->Subject = $subject;
            $mail->msgHTML($contentEmail);
            $send = $mail->send();
        } catch (Exception $e) {
            die('Erreur lors de l\'envoi du message. Erreur : ' . $mail->ErrorInfo);
        }

        if($send){
            // Envoie d'une alert si le message a été envoyé
            $alert =
            '<div class="alert alert-success alert-dismissible mb-4" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span id="close" aria-hidden="true">&times;</span></button>
            Votre message a bien été envoyé.</div>';

            $result = ['success' => true , 'message' => $alert];

            echo json_encode($result);
        }else{
            // Envoie d'une alert si une erreur c'est produite dans l'envoie du message
            $errors[] = 'Erreur lors de l\'envoi du message. Veuillez essayer par email.';

            $alert=
            '<div class="alert alert-danger alert-dismissible mb-4" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' .
            implode('<br>', $errors) . '</div>';
    
            $result = ['success' => false , 'message' => $alert];
    
            echo json_encode($result);
        }
        
    } else {
        // Envoie d'une alert si un des champs n'a pas été rempli correctement
        $alert=
        '<div class="alert alert-danger alert-dismissible mb-4" role="alert">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' .
        implode('<br>', $errors) . '</div>';

        $result = ['success' => false , 'message' => $alert];

        echo json_encode($result);
    }
}
