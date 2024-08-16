function openSlider(sliderId) {
    document.getElementById(sliderId).classList.add('active');
}

function closeSlider(sliderId) {
    document.getElementById(sliderId).classList.remove('active');
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}
