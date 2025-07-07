<?php
include 'db_connection.php';  

$pdo = getConnection();    

$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("CALL sp_activate_user(?)");
$stmt->execute([$data->id]);

echo json_encode(['message' => 'Usuario activado correctamente']);
?>
