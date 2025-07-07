<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL UpdateGameScore(?, ?, ?)");
$stmt->execute([$_POST['id'], $_POST['time'], $_POST['score']]);
echo json_encode(["status" => "success"]);
?>