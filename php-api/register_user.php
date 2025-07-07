<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    exit(0); // Responde a preflight y termina aquí
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");
require 'db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require_once 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
$username = $data->username;
$email = $data->email;
$password = $data->password;

try {
    $pdo = getConnection();
    $stmt = $pdo->prepare("CALL InsertUser(?, ?, ?)");
    $stmt->execute([$username, $email, $password]);

    echo "OK";
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage();
}
?>
