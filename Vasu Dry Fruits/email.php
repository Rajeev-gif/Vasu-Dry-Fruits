<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $products = json_decode($_POST['products'], true); // Decode the JSON string to an array
    $totalPrice = $_POST['totalPrice'];

    $to = "rajeevvalechha@gmail.com";
    $subject = "New Order Details";
    
    // Create the message with product details and total price
    $message = "Name: $name\nEmail: $email\nAddress: $address\n\nProducts:\n";
    foreach ($products as $product) {
        $message .= "Product Name: " . $product['name'] . " - Weight: " . $product['weight'] . "\n";
    }
    $message .= "\nTotal Price: $totalPrice";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}
?>