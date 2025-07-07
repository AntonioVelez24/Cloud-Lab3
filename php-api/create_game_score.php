<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL CreateGameScore(?, ?, ?, ?)");
$stmt->execute([$_POST['game_id'], $_POST['user_id'], $_POST['time'], $_POST['score']]);
echo json_encode(["status" => "success"]);
?>