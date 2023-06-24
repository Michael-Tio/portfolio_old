<?php
    $to = "mtio161@gmail.com";
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $headers = "From: ".$_POST["sender"]."\r\n"; // Sender's email address
    $headers .= "Reply-To: ".$_POST["sender"]."\r\n"; // Reply-to address
    $headers .= "MIME-Version: 1.0\r\n"; // MIME version
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n"; // Email content type

    // Send the email
    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        $response = "Email sent successfully.";
    } else {
        $response = "Failed to send email.";
    }

    echo "<script>";
    echo "alert('$response');";
    echo "</script>";

    header("Location: index.html")
?>
