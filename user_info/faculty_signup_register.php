<?php
include("faculty_signup_connect.php"); // Include the database connection

// Check if the form is submitted
if (isset($_POST['signup'])) {
    // Get form data
    $first_name = $_POST['first-name'];
    $middle_name = $_POST['middle-name'];
    $last_name = $_POST['last-name'];
    $program_name = $_POST['program'];
    $role_type = $_POST['role'];
    $user_id = $_POST['id_number'];
    $user_email = $_POST['email'];
    $user_password = $_POST['password']; // You should hash this password before storing it
    $user_password = md5($user_password); // Hash the password
    $suffix = $_POST['suffix'];

    // Check if the email already exists
    $check_email = "SELECT * FROM users WHERE user_email = ?"; // Use the correct table name
    $result = $conn->query($check_email);
      if ($result->num_rows > 0) {
        echo "Email already exists";
    } else {
        // Insert data into database
        $sql = "INSERT INTO Accounts (first_name, middle_name, last_name, suffix, role_type, program, user_id, user_email, user_password) 
                VALUES ('$first_name', '$middle_name', '$last_name', '$suffix', '$role_type', '$program', '$user_id', '$user_email', '$user_password')";
        if($conn->query($sql)==TRUE) {
            header("Location: login_page.php"); // Redirect to login page on success
        } else {
            echo "Error: " . $conn->error; // Display error if the query fails
        }
    }
}
?>