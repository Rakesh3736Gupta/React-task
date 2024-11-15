
<?php
$host = "localhost";
$db_name = "form";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$conn = new mysqli($host, $username, $password, $db_name);

echo "connection was succesfully";
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
