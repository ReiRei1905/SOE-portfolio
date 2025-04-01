<?php
include("faculty_signup_connect.php"); // Include the database connection

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $first_name = $_POST['first-name'];
    $middle_name = $_POST['middle-name'];
    $last_name = $_POST['last-name'];
    $program = $_POST['program'];
    $role = $_POST['role'];
    $id_number = $_POST['id-number'];
    $user_email = $_POST['email'];
    $user_password = $_POST['password']; // You should hash this password before storing it
    $hashed_password = password_hash($user_password, PASSWORD_DEFAULT); // Hash the password
    $suffix = $_POST['suffix'];

    // Check if the email already exists
    $check_email = "SELECT * FROM users WHERE user_email = ?";
    $stmt = $conn->prepare($check_email);
    $stmt->bind_param("s", $user_email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Email already exists";
    } else {
        // Insert data into database
        $sql = "INSERT INTO users (first_name, middle_name, last_name, program, role, id_number, user_email, user_password, suffix) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssssss", $first_name, $middle_name, $last_name, $program, $role, $id_number, $user_email, $hashed_password, $suffix);
        
        if ($stmt->execute()) {
            // Redirect to login page or confirmation page
            header("Location: login_page.php");
            exit();
        } else {
            echo "Error: " . $stmt->error; // Display error if the query fails
        }
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>