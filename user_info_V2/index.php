<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="style.css"> <!-- Link to external CSS file for styling -->
</head>
<body>
    <div class="container" id = signUp style="display: none;">
        <h1 class = "form-title"> Register </h1>
        <form method="post" action ="register.php">
            <div class="input-group">
                <i class = "fas fa-user"></i>
                <input type = "text" name = "fName" placeholder = "First Name" required> <!-- required attribute makes the field mandatory -->
                <label for = "fName"></label> <!-- label for accessibility, associates the label with the input field -->
            </div>

            <div class="input-group">
                <i class = "fas fa-user"></i>
                <input type = "text" name = "lName" placeholder = "Last Name" required> <!-- required attribute makes the field mandatory -->
                <label for = "lName"></label> <!-- label for accessibility, associates the label with the input field -->
            </div>

            <div class="input-group">
                <i class = "fas fa-envelope"></i>
                <input type = "email" name = "email" placeholder = "Email" required> <!-- required attribute makes the field mandatory -->
                <label for = "email"></label> <!-- label for accessibility, associates the label with the input field -->
            </div>

            <div class="input-group">
                <i class = "fas fa-lock"></i>
                <input type = "password" name = "password" placeholder = "Password" required> <!-- required attribute makes the field mandatory -->
                <label for = "password"></label> <!-- label for accessibility, associates the label with the input field -->
            </div>

            <input type = "submit" class = "btn" value = "Sign-Up" name = "signUp"> <!-- submit button to send the form data -->

            <div class = "links">
                <p>Already have an account?</p> <!-- prompt for users who already have an account -->
                <button id = "signInButton">Sign In</button>
            </div>
        </form>
    </div>

    <div class="container" id = signIn>
        <h1 class = "form-title"> Sign-In </h1>
        <form method="post" action ="register.php">
            <div class="input-group">
                <i class = "fas fa-envelope"></i>
                <input type = "email" name = "email" placeholder = "Email" required> <!-- required attribute makes the field mandatory -->
                <label for = "email"></label> <!-- label for accessibility, associates the label with the input field -->
            </div>

            <div class="input-group">
                <i class = "fas fa-lock"></i>
                <input type = "password" name = "password" placeholder = "Password" required> <!-- required attribute makes the field mandatory -->
                <label for = "password"></label> <!-- label for accessibility, associates the label with the input field -->
            </div>

            <p class = "recover">
                <a href = "#">Forgot Password?</a> <!-- link for password recovery -->
            </p>

            <input type = "submit" class = "btn" value = "Sign-In" name = "signIn"> <!-- submit button to send the form data -->

            <div class = "links">
                <p>Don't have an account yet?</p> <!-- prompt for users who already have an account -->
                <button id = "signUpButton">Sign Up</button>
            </div>
        </form>
    </div>
    <script src="script.js"></script> <!-- Link to external JavaScript file for functionality -->
</body>
</html>