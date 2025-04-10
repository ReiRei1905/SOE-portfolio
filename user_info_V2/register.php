<?php 

include 'connect.php';


if (isset($_POST['signUp'])) {
    $first_name = $_POST['fName'];
    $last_name = $_POST['lName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password = md5($password); // Encrypt the password

    // Check if the email already exists
    $checkEmail = "SELECT * FROM users WHERE email='$email'";
    $result =$conn->query($checkEmail);

    if ($result->num_rows > 0) {
    echo "Email already exists. Please use a different email !";

} else {
    $insertQuery = "INSERT INTO users (first_name, last_name, email, password) 
                    VALUES ('$first_name', '$last_name', '$email', '$password')";
                    if ($conn->query( $insertQuery) === TRUE) {
                        header("location: index.php");
                    } else {
                            echo "Error: " .$conn->error;
                        }
                    }
                }
                
                if (isset($_POST['signIn'])) {
                    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
                    $password = isset($_POST['password']) ? trim($_POST['password']) : '';
                
                    if (empty($email) || empty($password)) {
                        echo "Email and password are required!";
                    } else {
                        $email = $conn->real_escape_string($email);
                        $password = md5($password); // Encrypt the password
                
                        $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
                        $result = $conn->query($sql);
                
                        if ($result->num_rows > 0) {
                            session_start();
                            $row = $result->fetch_assoc();
                            $_SESSION['email'] = $row['email'];
                            header("location: review_user.php");
                            exit();
                        } else {
                            echo "Invalid email or password!";
                        }
                    }
                }
?>