<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL UpdateState(?, ?)");
$stmt->execute([$_POST['id'], $_POST['description']]);
echo json_encode(["status" => "success"]);
?>