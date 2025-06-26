<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'db.php';
function jsonBody() { return json_decode(file_get_contents('php://input'), true) ?? []; }

$method = $_SERVER['REQUEST_METHOD'];
$id     = $_GET['id'] ?? null;
if ($method === 'OPTIONS') exit;   // pre-flight

switch ($method) {
  case 'GET':
    $sql = "SELECT s.*, t.TenTL FROM sach s LEFT JOIN theloai t ON s.idTL = t.idTL"
         . ($id ? " WHERE s.id = :id" : '') . " ORDER BY s.id DESC";
    $stmt = $pdo->prepare($sql);
    if ($id) $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    echo json_encode($stmt->fetchAll());
    break;

  case 'POST':
    $d = jsonBody();
    $sql = "INSERT INTO sach (TenSach,TacGia,idTL,SoLuong,TomTat,TinhTrang)
            VALUES (:TenSach,:TacGia,:idTL,:SoLuong,:TomTat,:TinhTrang)";
    $pdo->prepare($sql)->execute([
      ':TenSach'=>$d['TenSach'], ':TacGia'=>$d['TacGia'], ':idTL'=>$d['idTL'],
      ':SoLuong'=>$d['SoLuong'], ':TomTat'=>$d['TomTat'], ':TinhTrang'=>$d['TinhTrang']
    ]);
    echo json_encode(['id' => $pdo->lastInsertId()]);
    break;

  case 'PUT':
    if (!$id) { http_response_code(400); exit; }
    $d = jsonBody();
    $sql = "UPDATE sach SET TenSach=:TenSach,TacGia=:TacGia,idTL=:idTL,
                            SoLuong=:SoLuong,TomTat=:TomTat,TinhTrang=:TinhTrang
            WHERE id=:id";
    $pdo->prepare($sql)->execute([
      ':TenSach'=>$d['TenSach'], ':TacGia'=>$d['TacGia'], ':idTL'=>$d['idTL'],
      ':SoLuong'=>$d['SoLuong'], ':TomTat'=>$d['TomTat'],
      ':TinhTrang'=>$d['TinhTrang'], ':id'=>$id
    ]);
    echo json_encode(['updated'=>true]);
    break;

  case 'DELETE':
    if (!$id) { http_response_code(400); exit; }
    $pdo->prepare("DELETE FROM sach WHERE id=:id")->execute([':id'=>$id]);
    echo json_encode(['deleted'=>true]);
    break;

  default:
    http_response_code(405);
}
