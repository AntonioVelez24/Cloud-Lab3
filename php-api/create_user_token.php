<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->prepare("CALL CreateUserToken(?, ?, ?, ?, ?)");
$stmt->execute([
    $_POST['user_id'], $_POST['token'], $_POST['login_attempt'], $_POST['last_login'], $_POST['created_by']
]);
echo json_encode(["status" => "success"]);
?>