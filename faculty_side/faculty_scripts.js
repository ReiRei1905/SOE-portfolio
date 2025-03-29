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

/*Start of function with program creation*/
// JavaScript for dynamic program creation and removal
const createProgramBtn = document.getElementById('createProgramBtn');
const programInputContainer = document.getElementById('programInputContainer');
const programInput = document.getElementById('programInput');
const confirmProgramBtn = document.getElementById('confirmProgramBtn');
const programList = document.getElementById('programList');

// Show input field when "Create a new Program" is clicked
createProgramBtn.addEventListener('click', () => {
    programInputContainer.classList.remove('hidden');
    programInput.focus();
});

// Add new program to the list
confirmProgramBtn.addEventListener('click', () => {
    const programName = programInput.value.trim();
    if (programName) {
        const programItem = document.createElement('div');
        programItem.classList.add('program-item');
        programItem.innerHTML = `
            <span>${programName}</span>
            <i class="fas fa-ellipsis-v program-options" onclick="toggleDropdown(this)"></i>
            <div class="dropdown hidden">
                <button class="remove-btn" onclick="removeProgram(this)">Remove Program</button>
            </div>
        `;
        programList.appendChild(programItem);
            programInput.value = '';
            programInputContainer.classList.add('hidden');
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