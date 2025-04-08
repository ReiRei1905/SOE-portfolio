<?php 

include 'connect.php';
if (isset($_POST['SignUp'])) {
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password = md5($_POST['password']);

    // Check if the email already exists
    $checkEmail = "SELECT * FROM users WHERE email='$email'";
    $result =$conn->query(query:$checkEmail);

if ($result->num_rows > 0) {
    echo "Email already exists. Please use a different email !";

} else {
    $insertQuery = "INSERT INTO users (firstName, lastName, email, password) 
                    VALUES ('$fName', '$lName', '$email', '$password')";
                    if ($conn->query( $insertQuery) === TRUE) {
                        header("location: index.php");
                    } else {
                            echo "Error: " .$conn->error;
                        }
                    }
                }
                if (isset($_POST['SignIn'])) {
                    $email = $_POST['email'];
                    $password = $_POST['password'];
                    $password = md5(string: $_POST['password']);
                    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        session_start();
                        $row= $result->fetch_assoc();
                        $_SESSION['email'] = $email;
                        header( "location: homepage.php");
                        exit();
                    } else {
                        echo "Invalid email or password !";
                    }
                }
?>