<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL DeleteGame(?)");
$stmt->execute([$_POST['id']]);
echo json_encode(["status" => "success"]);
?>