document.addEventListener("DOMContentLoaded", function () {
    // Get all the containers
    const signInContainer = document.getElementById('signIn');
    const studentSignUp = document.getElementById('studentSignUp');
    const facultySignUp = document.getElementById('facultySignUp');
    const adminSignUp = document.getElementById('adminSignUp');

    const signUpButton = document.getElementById('signUpButton');
    const roleTypeSelectors = document.querySelectorAll('select[name="role_type"]');

    // Show student sign-up form when clicking Sign Up
    signUpButton.addEventListener('click', (e) => {
        e.preventDefault();
        signInContainer.style.display = 'none';
        studentSignUp.style.display = 'block';
        facultySignUp.style.display = 'none';
        adminSignUp.style.display = 'none';

        // Reset role dropdowns (optional)
        roleTypeSelectors.forEach(selector => {
            selector.selectedIndex = 0;
        });
    });

    // Listen for changes on *any* role_type dropdown
    roleTypeSelectors.forEach(selector => {
        selector.addEventListener('change', (e) => {
            const role = e.target.value;

            // Hide all sign-up forms
            studentSignUp.style.display = 'none';
            facultySignUp.style.display = 'none';
            adminSignUp.style.display = 'none';

            // Show the selected form based on the role
            if (role === 'student') {
                studentSignUp.style.display = 'block';
            } else if (role === 'faculty') {
                facultySignUp.style.display = 'block';
            } else if (role === 'admin') {
                adminSignUp.style.display = 'block';
            }

            // Sync all role_type dropdowns to the selected role
            roleTypeSelectors.forEach(dropdown => {
                dropdown.value = role;
            });
        });
    });

    // Listen for changes on the role_type dropdown in the sign-up forms
    document.querySelectorAll('.role-switcher').forEach(selector => {
        selector.addEventListener('change', (e) => {
            const role = e.target.value;

            // Hide all sign-up forms
            studentSignUp.style.display = 'none';
            facultySignUp.style.display = 'none';
            adminSignUp.style.display = 'none';

            // Show the selected form based on the role
            if (role === 'student') {
                studentSignUp.style.display = 'block';
            } else if (role === 'faculty') {
                facultySignUp.style.display = 'block';
            } else if (role === 'admin') {
                adminSignUp.style.display = 'block';
            }
        });
    });

    // Add event listeners for "Back" buttons
    const backButtons = document.querySelectorAll(".back-button");
    backButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            // Hide all sign-up forms and show the sign-in form
            studentSignUp.style.display = 'none';
            facultySignUp.style.display = 'none';
            adminSignUp.style.display = 'none';
            signInContainer.style.display = 'block';
        });
    });

    // Add event listeners for buttons to show specific forms
    document.getElementById("showStudent").addEventListener("click", function () {
        showForm("studentSignUp", "student");
    });

    document.getElementById("showFaculty").addEventListener("click", function () {
        showForm("facultySignUp", "faculty");
    });

    document.getElementById("showAdmin").addEventListener("click", function () {
        showForm("adminSignUp", "admin");
    });

    // Function to show the correct form and sync the role_type dropdown
    function showForm(containerId, roleValue) {
        // Hide all containers
        document.querySelectorAll(".container").forEach(el => el.style.display = "none");

        // Show the selected container
        const formToShow = document.getElementById(containerId);
        if (formToShow) formToShow.style.display = "block";

        // Sync the role_type dropdown
        const roleSelect = formToShow.querySelector('select[name="role_type"]');
        if (roleSelect) {
            roleSelect.value = roleValue;
        }
    }

    document.querySelectorAll('.toggle-password').forEach(function(toggle) {
        toggle.addEventListener('click', function () {
            // Find the sibling input of type password/text
            const input = this.parentElement.querySelector('.password-input');
            if (input) {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            }
        });
    });
});
