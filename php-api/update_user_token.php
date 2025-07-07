<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL UpdateUserToken(?, ?, ?, ?, ?)");
$stmt->execute([
    $_POST['id'], $_POST['token'], $_POST['login_attempt'], $_POST['last_login'], $_POST['modified_by']
]);
echo json_encode(["status" => "success"]);
?>