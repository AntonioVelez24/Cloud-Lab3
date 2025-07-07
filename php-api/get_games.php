<?php
require_once 'db_connection.php';
$pdo = getConnection();
$stmt = $pdo->query("CALL GetGames()");
$games = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($games);
?>