<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

try {
    $pdo = new PDO("mysql:host=localhost;dbname=cloud", "root", "");
    
    $stmt = $pdo->query("
        SELECT 
            u.username, 
            g.game_name,
            gs.score,
            gs.time
        FROM gamescores gs
        JOIN users u ON gs.user_id = u.id
        JOIN games g ON gs.game_id = g.id
        WHERE gs.score IS NOT NULL
        ORDER BY gs.score DESC
        LIMIT 10
    ");

    $scores = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($scores);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
