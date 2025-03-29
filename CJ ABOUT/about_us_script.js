
function goToOverviewPage() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleProfileClick() {
    alert('Profile button clicked!');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('aboutUs');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shifted');

}

// Added this event listener to set the top property of the sidebar dynamically
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const sidebar = document.getElementById('sidebar');
    sidebar.style.top = `${header.offsetHeight}px`;
});

