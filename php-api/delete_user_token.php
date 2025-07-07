<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL DeleteUserToken(?)");
$stmt->execute([$_POST['id']]);
echo json_encode(["status" => "success"]);
?>