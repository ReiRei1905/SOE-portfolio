function showPopup(role) {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupMessage = document.getElementById('popup-message');
    const popupText = document.getElementById('popup-text');

    let message = '';
    if (role === 'professor') {
        message = 'Note: Choosing your Role as a Prof will make you only create courses, manage assigned classes, and observe students’ academic and extracurricular portfolios (This cannot be changed easily, please recheck your credentials)';
    } else if (role === 'program_director') {
        message = 'Note: Choosing your Role as a P.D will make you only create courses, lists of students, and observe students’ academic and extracurricular portfolios (This cannot be changed easily, please recheck your credentials)';
    } else if (role === 'executive_director') {
        message = 'Note: Choosing your Role an ExD will give you access of creating programs and observe students’ academic portfolios and extracurricular portfolios (This cannot be changed easily, please recheck your credentials)';
    }

    popupText.innerText = message;
    popupOverlay.style.display = 'block';
    popupMessage.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup-message').style.display = 'none';
}

function confirmPopup() {
    // Add your confirmation logic here
    closePopup();
}