<?php
// 🟦 Manejo de CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    exit(0);
}

// 🟦 CORS real
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

require_once 'db_connection.php';

try {
    $conn = getConnection();

    // 🟦 Leer el JSON recibido
    $data = json_decode(file_get_contents("php://input"), true);
    $email = trim($data["email"] ?? '');
    $password = trim($data["password"] ?? '');

    // 🟦 Validación básica
    if (empty($email) || empty($password)) {
        echo json_encode([
            "status" => "error",
            "message" => "Email y contraseña requeridos"
        ]);
        exit;
    }

    // 🟦 Llamar al procedimiento almacenado
    $stmt = $conn->prepare("CALL login_user(:email, :password)");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        echo json_encode([
            "status" => "success",
            "user" => $user
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Credenciales inválidas"
        ]);
    }

} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => "Error en la base de datos: " . $e->getMessage()
    ]);
}
