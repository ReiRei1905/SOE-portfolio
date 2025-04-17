<?php
// filepath: c:\xampp\htdocs\SOE-portfolio\faculty_side\delete_program.php
header('Content-Type: application/json');

$connection = new mysqli("localhost", "root", "", "soe_portfolio");

if ($connection->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}

$programId = $_POST['programId'] ?? '';

if (!empty($programId)) {
    $stmt = $connection->prepare("DELETE FROM programs WHERE program_id = ?");
    $stmt->bind_param("i", $programId);
    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to delete program"]);
    }
    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid program ID"]);
}

$connection->close();
?>