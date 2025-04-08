<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-up & Login</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container" id="Sign-up" style="display:none;">

    <h1 class="form-title">Register</h1>
    <form method="post" action="register.php"> 
    <div class="input-group">
    <i class="fas fa-user"></i>
    <input type="text" name="fName" id="fName" placeholder="First name" required>
    <label for="fName">First name</label>
    </div>
    <div class="input-group">
        <i class="fas fa-user"></i>
    <input type="text" name="lName" id="lName" placeholder="Last name" required>    
    <label for="lName">Last name</label>
    </div>
    <div class="input-group">
        <i class="fas fa-envelope"></i>
    <input type="email" name="email" id="email" placeholder="Email" required>
    <label for="email">Email</label>
    </div>
    <div class="input-group">
        <i class="fas fa-lock"></i>
    <input type="password" name="password" id="password" placeholder="Password" required>  
    <label for="password">Password</label>
    </div>
    <input type="submit" class="btn" value="Sign-up" name="SignUp">
</form>
<p class="or">
----------or----------
</p>
<div class="icons">
    <i class="fab fa-google"></i>
    <i class="fab fa-facebook"></i>
    <i class="fab fa-twitter"></i>
</div>
<div class="links">
    <p>Already have an account</p>
    <button id="signInButton">Sign-in</button>
</div>
</div> 

<div class="container" id="Sign-in">

    <h1 class="form-title">Sign In</h1>
    <form method="post" action=""> 
    <div class="input-group">
        <i class="fas fa-envelope"></i>
    <input type="email" name="email" id="email" placeholder="Email" required>
    <label for="email">Email</label>
    </div>
    <div class="input-group">
        <i class="fas fa-lock"></i>
    <input type="password" name="password" id="password" placeholder="Password" required>  
    <label for="password">Password</label>
    </div>
    <p class="recover">
        <a href="recover.php">Recover Password</a>
    </p>
    <input type="submit" class="btn" value="Sign-in" name="SignIn">
</form>
<p class="or">
----------or----------
</p>
<div class="icons">
    <i class="fab fa-google"></i>
    <i class="fab fa-facebook"></i>
    <i class="fab fa-twitter"></i>
</div>
<div class="links">
    <p>I don't have an account yet</p>
    <button id="signUpButton">Sign-up</button>
</div>
</div> 
<script src="script.js"></script>
</body>
</html>