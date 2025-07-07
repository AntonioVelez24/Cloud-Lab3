<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL UpdateUser(?, ?, ?, ?, ?)");
$stmt->execute([$_POST['id'], $_POST['username'], $_POST['email'], $_POST['state_id'], $_POST['modified_by']]);
echo json_encode(["status" => "success"]);
?>