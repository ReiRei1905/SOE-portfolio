const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('Sign-in');
const signUpForm=document.getElementById('Sign-up');

signUpButton.addEventListener('click', function() {
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
})
signInButton.addEventListener('click', function() {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
})