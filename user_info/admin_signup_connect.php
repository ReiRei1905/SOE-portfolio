<?php
// Database connection
$host = "localhost";
$user = "root";
$password = "";
$dbname = "soeportfolio";
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo ("Connection failed: X " .$conn->connect_error);
}

?>