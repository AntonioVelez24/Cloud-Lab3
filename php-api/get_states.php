<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->query("CALL GetStates()");
$states = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($states);
?>