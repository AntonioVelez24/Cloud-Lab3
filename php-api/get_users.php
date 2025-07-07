<?php
require_once 'db_connection.php';

header('Content-Type: application/json');

$pdo = getConnection();
$stmt = $pdo->query("CALL GetUsers()");
$scores = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($scores);