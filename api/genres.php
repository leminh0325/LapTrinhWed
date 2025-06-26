<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
require_once 'db.php';
echo json_encode($pdo->query("SELECT idTL, TenTL FROM theloai ORDER BY TenTL")->fetchAll());
