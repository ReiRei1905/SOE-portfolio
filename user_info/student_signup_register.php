<?php
include("student_signup_connect.php"); // Include the correct database connection file

// Check if the form is submitted
if (isset($_POST['signup'])) {
    // Get form data
    $first_name = $_POST['first-name'];
    $middle_name = $_POST['middle-name'];
    $last_name = $_POST['last-name'];
    $year_enrollment = $_POST['year-enrollment']; // Added year of enrollment
    $program_name = $_POST['program']; // Added program
    $user_id = $_POST['id-number'];
    $user_email = $_POST['email'];
    $user_password = $_POST['password']; // Get the password from the form
    $user_password = md5($user_password); // Hash the password
    $suffix = $_POST['suffix'];

    // Check if the email already exists
    $check_email = "SELECT * FROM users WHERE user_email = ?"; // Use the correct table name
    $result = $conn->query($check_email);
      if ($result->num_rows > 0) {
        echo "Email already exists";
    } else {
        // Insert data into database
        $sql = "INSERT INTO Accounts (first_name, middle_name, last_name, year_enrollment, program_name, user_id, user_email, user_password, suffix) 
                VALUES ('$first_name', '$middle_name', '$last_name', '$suffix', '$year_enrollment', '$program_name', '$id_number', '$user_email', '$user_password')";
        if($conn->query($sql)==TRUE) {
            header("Location: login_page.php"); // Redirect to login page on success
        } else {
            echo "Error: " . $conn->error; // Display error if the query fails
        }
    }
}
?>