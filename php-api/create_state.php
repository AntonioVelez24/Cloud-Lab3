<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL CreateState(?)");
$stmt->execute([$_POST['description']]);
echo json_encode(["status" => "success"]);
?>