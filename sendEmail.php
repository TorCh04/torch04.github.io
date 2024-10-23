<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Collect form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Simple validation (ensure no fields are empty)
        if (empty($name) || empty($email) || empty($message)) {
            echo "All fields are required.";
            exit;
        }

        // Set email details
        $to = "tor4704@gmail.com";  // Replace with your own email address
        $subject = "New message received from project website from $name";
        $body = "You have received a new message.\n\n".
                "Name: $name\n".
                "Email: $email\n\n".
                "Message:\n$message";
        $headers = "From: $email";

        // Send the email using the mail() function
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    } else {
        echo "Invalid request.";
    }
