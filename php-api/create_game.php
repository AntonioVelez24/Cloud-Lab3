<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL CreateGame(?, ?)");
$stmt->execute([$_POST['game_name'], $_POST['created_by']]);
echo json_encode(["status" => "success"]);
?>