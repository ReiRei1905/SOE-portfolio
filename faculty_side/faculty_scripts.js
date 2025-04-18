function toggleChart() {
    const pieChart = document.getElementById('pieChart');
    const mostUploads = document.getElementById('mostUploads');
    const barChart = document.getElementById('barChart');
    const arrowRight = document.getElementById('arrowRight');
    const arrowLeft = document.getElementById('arrowLeft');

    if (pieChart.style.display === 'block') {
        pieChart.style.display = 'none';
        mostUploads.style.display = 'none';
        barChart.style.display = 'block';
        arrowRight.style.display = 'none';
        arrowLeft.style.display = 'block';
    } else {
        pieChart.style.display = 'block';
        mostUploads.style.display = 'block';
        barChart.style.display = 'none';
        arrowRight.style.display = 'block';
        arrowLeft.style.display = 'none';
    }
}

function goToOverviewPage() {
    /*// Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });*/
    // Redirect to the overview page
    window.location.href = "faculty_homepage.html";
}

function handleProfileClick() {
    alert('Profile button clicked!');
}

/*Toggle sidebar in overview section */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('overview') 
    || document.getElementById('aboutUs') 
    || document.getElementById('programs')
    || document.getElementById('courses')
    || document.getElementById('classes')
    || document.getElementById('listsStudents');
    // Toggle the sidebar visibility
    sidebar.classList.toggle('active');
    // Adjust the main content position
    mainContent.classList.toggle('shifted');

}

document.addEventListener("DOMContentLoaded", () => {
    // Sidebar adjustment
    const header = document.querySelector('header');
    const sidebar = document.getElementById('sidebar');
    sidebar.style.top = `${header.offsetHeight}px`;

    // Program creation logic
    
    /*this was before implmenting backend:
    /*const createProgramBtn = document.getElementById("createProgramBtn");
    const programInputContainer = document.getElementById("programInputContainer");
    const programInput = document.getElementById("programInput");
    const confirmProgramBtn = document.getElementById("confirmProgramBtn");
    const programList = document.getElementById("programList");
    const programItemTemplate = document.getElementById("programItemTemplate");

    if (createProgramBtn) {
        createProgramBtn.addEventListener("click", () => {
            programInputContainer.classList.remove("hidden");
        });

        confirmProgramBtn.addEventListener("click", () => {
            const programName = programInput.value.trim();
            if (programName) {
                const programItem = programItemTemplate.content.cloneNode(true);
                programItem.querySelector(".program-name").textContent = programName;
                programList.appendChild(programItem);
                programInput.value = "";
                programInputContainer.classList.add("hidden");
            } else {
                alert("Please enter a valid program name.");
            }
        });
    }*/
    
    // Program creation logic with backend
    fetchPrograms();
    const createProgramBtn = document.getElementById("createProgramBtn");
    const programInputContainer = document.getElementById("programInputContainer");
    const programInput = document.getElementById("programInput");
    const confirmProgramBtn = document.getElementById("confirmProgramBtn");
    const programList = document.getElementById("programList");
    const programItemTemplate = document.getElementById("programItemTemplate");

    createProgramBtn.addEventListener("click", () => {
        programInputContainer.classList.remove("hidden");
        programInput.focus();
    });

    confirmProgramBtn.addEventListener("click", () => {
        const programName = programInput.value.trim();
        if (programName) {
            // Send program name to the server
            fetch("create_program.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `programName=${encodeURIComponent(programName)}`,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        // Clear the input and hide the input container
                        programInput.value = "";
                        programInputContainer.classList.add("hidden");
    
                        // Fetch the updated program list dynamically
                        fetchPrograms();
                    } else {
                        alert(data.message);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            alert("Please enter a valid program name.");
        }
    });
    
    // Function to fetch and display programs
    function fetchPrograms() {
        fetch("fetch_programs.php")
            .then((response) => response.json())
            .then((programs) => {
                console.log("Fetched programs:", programs); // Debugging: Check the fetched programs
                programList.innerHTML = ""; // Clear the current program list
    
                // Add each program to the list
                programs.forEach((program) => {
                    const programItem = programItemTemplate.content.cloneNode(true);
                    programItem.querySelector(".program_name").textContent = program.name;
    
                    // Add functionality to the remove button
                    const removeButton = programItem.querySelector(".remove-btn");
                    removeButton.addEventListener("click", () => {
                        if (confirm(`Are you sure you want to delete "${program.name}"?`)) {
                            deleteProgram(program.id, programItem);
                        }
                    });
    
                    programList.appendChild(programItem);
                });
            })
            .catch((error) => {
                console.error("Error fetching programs:", error);
            });
    }
    
    deleteProgram(programId, programItem);
    function deleteProgram(programId, programItem) {
        fetch("delete_program.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `programId=${encodeURIComponent(programId)}`,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Remove the program from the DOM
                    programList.removeChild(programItem);
                    alert("Program deleted successfully.");
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error("Error deleting program:", error);
            });
    }
    

    // Course creation logic
    const createCourseBtn = document.getElementById("createCourseBtn");
    const courseInputContainer = document.getElementById("courseInputContainer");
    const courseInput = document.getElementById("courseInput");
    const confirmCourseBtn = document.getElementById("confirmCourseBtn");
    const courseList = document.getElementById("courseList");
    const courseItemTemplate = document.getElementById("courseItemTemplate");

    if (createCourseBtn) {
        createCourseBtn.addEventListener("click", () => {
            courseInputContainer.classList.remove("hidden");
            courseInput.focus();
        });

        confirmCourseBtn.addEventListener("click", () => {
            const courseName = courseInput.value.trim();
            if (courseName) {
                const courseItem = courseItemTemplate.content.cloneNode(true);
                courseItem.querySelector(".course-name").textContent = courseName;
                courseList.appendChild(courseItem);
                courseInput.value = "";
                courseInputContainer.classList.add("hidden");
            } else {
                alert("Please enter a valid course name.");
            }
        });
    }
});


// Add click functionality to each program item
programList.addEventListener("click", (event) => {
    // Check if the click is on the three-dot icon or dropdown menu
    if (event.target.closest(".program-options") || event.target.closest(".dropdown")) {
        // Stop propagation to prevent redirection
        event.stopPropagation();
        return;
    }

    // Check if the click is on a program item
    const programItem = event.target.closest(".program-item");
    if (programItem) {
        const programName = programItem.querySelector(".program_name").textContent.trim();
        const programSlug = encodeURIComponent(programName);
        // Redirect to courses.html with the program name as a query parameter
        window.location.href = `courses.html?program=${programSlug}`;
    }
});

programNameSpan.addEventListener("click", () => {
    // Redirect to the course creation page with the program name as a query parameter
    const programSlug = encodeURIComponent(programName);
    window.location.href = `courses.html?program=${programSlug}`;
});

// Remove program from the list
function removeProgram(button) {
    const programItem = button.closest('.program-item');
    programList.removeChild(programItem);
}

// Toggle dropdown menu
function toggleDropdown(icon) {
    const dropdown = icon.nextElementSibling;
    dropdown.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
    // Get the program name from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const programName = urlParams.get("program");

    // Display the program name in the header
    const coursesTitle = document.querySelector(".courses-title");
    coursesTitle.textContent = `Programs > ${decodeURIComponent(programName)}`;
});


// Remove course from the list
function removeCourse(button) {
    const courseItem = button.closest('.course-item');
    courseItem.remove();
}

// Toggle dropdown menu
function toggleDropdown(icon) {
    const dropdown = icon.nextElementSibling;
    dropdown.classList.toggle('hidden');
}

// Edit course name
function editCourse(button) {
    const courseItem = button.closest('.course-item');
    const courseNameSpan = courseItem.querySelector('.course-name');
    const newCourseName = prompt("Edit course name:", courseNameSpan.textContent);
    if (newCourseName) {
        courseNameSpan.textContent = newCourseName.trim();
    }
}