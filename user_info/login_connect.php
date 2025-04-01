<?php

$host="localhost";
$user="root";
$password="";
$dbname= "soeportfolio";
$conn = new mysqli($host,$user,$password,$dbname);


if ($conn->connect_error) {
    echo ("Connection failed: X " .$conn->connect_error);
}

?>