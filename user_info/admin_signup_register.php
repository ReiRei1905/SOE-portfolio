<?php
include("admin_signup_connect.php");

// Check if the form is submitted
if (isset($_POST['signup'])) {
    // Get form data
    $first_name = $_POST['first-name'];
    $middle_name = $_POST['middle-name'];
    $last_name = $_POST['last-name'];
    $user_id = $_POST['id-number'];
    $user_email = $_POST['email'];
    $user_password = $_POST['password']; // You should hash this password before storing it
    $user_password =md5($password);
    $suffix = $_POST['suffix'];

    $check_email = "SELECT * FROM user WHERE email = '$email'";
    $result = $conn->query($check_email);
    if ($result->num_rows > 0) {
        echo "Email already exists";
    } else {
        // Insert data into database
        $sql = "INSERT INTO Accounts (first_name, middle_name, last_name, user_id, user_email, user_password, suffix) 
                  VALUES ('$first_name', '$middle_name', '$last_name', '$user_id', '$email', '$password', '$suffix')";
        if ($conn->query($sql) === TRUE) {
            header("Location: login_page.php");
        } else {
            echo "Error: ".$conn->error;
        }
    }
}
?>