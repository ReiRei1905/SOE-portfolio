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
    || document.getElementById('classes')
    || document.getElementById('listsStudents');
    // Toggle the sidebar visibility
    sidebar.classList.toggle('active');
    // Adjust the main content position
    mainContent.classList.toggle('shifted');

}

// Added this event listener to set the top property of the sidebar dynamically
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const sidebar = document.getElementById('sidebar');
    sidebar.style.top = `${header.offsetHeight}px`;
});


/*Start of Creation of Programs*/ 
// Get references to elements
const createProgramBtn = document.querySelector('.create-program-btn');
const programInputContainer = document.getElementById('programInputContainer');
const programInput = document.getElementById('programInput');
const confirmProgramBtn = document.getElementById('confirmProgramBtn');
const programList = document.querySelector('.program-list');
const programItemTemplate = document.getElementById('programItemTemplate');

// Ensure the input container is hidden initially
window.addEventListener('DOMContentLoaded', () => {
    programInputContainer.classList.add('hidden'); // Add the hidden class on page load
});

// Show input field when "Create a new Program" is clicked
createProgramBtn.addEventListener('click', () => {
    programInputContainer.classList.remove('hidden'); // Show the input container
    programInput.focus(); // Focus on the input field
    createProgramBtn.classList.add('hidden'); // Hide the "Create a new Program" button
});

// Add new program to the list
confirmProgramBtn.addEventListener('click', () => {
    const programName = programInput.value.trim();
    if (programName) {
        // Clone the template
        const programItem = programItemTemplate.content.cloneNode(true);
        programItem.querySelector('.program-name').textContent = programName;

        // Append the new program item to the list
        programList.appendChild(programItem);

        // Clear the input field and hide the input container
        programInput.value = '';
        programInputContainer.classList.add('hidden'); // Hide the input container
        createProgramBtn.classList.remove('hidden'); // Show the "Create a new Program" button again
    }
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