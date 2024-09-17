<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $formData = $_POST;

    $filePath = 'data/contact_form_data.json';

    $jsonData = [];
    if (file_exists($filePath)) {
        $jsonContent = file_get_contents($filePath);
        $jsonData = json_decode($jsonContent, true); 
    }

    // Append the new form data
    $jsonData[] = $formData;

    $newJsonContent = json_encode($jsonData, JSON_PRETTY_PRINT);

    if (file_put_contents($filePath, $newJsonContent)) {
        echo 'Form data saved successfully!';
    } else {
        echo 'Error saving form data.';
    }
} else {
    echo 'Invalid request method.';
}
?>
