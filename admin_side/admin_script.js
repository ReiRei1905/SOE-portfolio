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
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleProfileClick() {
    alert('Profile button clicked!');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shifted');

}

// Added this event listener to set the top property of the sidebar dynamically
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const sidebar = document.getElementById('sidebar');
    sidebar.style.top = `${header.offsetHeight}px`;
});

function toggleDropdown(button) {
    var dropdownContent = button.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function checkUserInfo(userId) {
    // Implement the logic to check user info
    alert('Check User Info for user ID: ' + userId);
}

function removeUser(userId) {
    // Implement the logic to remove user
    alert('Remove User with user ID: ' + userId);
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
