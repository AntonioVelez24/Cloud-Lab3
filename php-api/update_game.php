<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL UpdateGame(?, ?, ?)");
$stmt->execute([$_POST['id'], $_POST['game_name'], $_POST['modified_by']]);
echo json_encode(["status" => "success"]);
?>