<?php
header('Content-Type: application/json');

// Database connection
$connection = new mysqli("localhost", "root", "", "soe_portfolio");

if ($connection->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed"]));
}

// Get program ID from GET request
$programId = $_GET['programId'] ?? '';

if (!empty($programId)) {
    // Fetch courses for the given program ID
    $stmt = $connection->prepare("SELECT course_id AS id, course_name AS name FROM courses WHERE program_id = ?");
    $stmt->bind_param("i", $programId);
    $stmt->execute();
    $result = $stmt->get_result();

    $courses = [];
    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }

    echo json_encode($courses);
    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid program ID"]);
}

$connection->close();
?>