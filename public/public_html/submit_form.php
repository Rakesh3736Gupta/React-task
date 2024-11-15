// api/submit_form.php
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

include_once 'config.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->name) && !empty($data->email) && !empty($data->subject)) {
    $name = $conn->real_escape_string(htmlspecialchars(strip_tags($data->name)));
    $email = $conn->real_escape_string(htmlspecialchars(strip_tags($data->email)));
    $subject = $conn->real_escape_string(htmlspecialchars(strip_tags($data->subject)));

    $query = "INSERT INTO massage (name, email, subject) VALUES ('$name', '$email', '$subject')";

    if ($conn->query($query) === TRUE) {
        http_response_code(201);
        echo json_encode(array("message" => "Form submitted successfully."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to submit form."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to submit form. Data is incomplete."));
}

$conn->close();
?>
