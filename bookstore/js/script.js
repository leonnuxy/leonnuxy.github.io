
// Slider Functions
// Open slider 
function openSlider(sliderId) {
    document.getElementById(sliderId).classList.add('active');
}

// CLose slider
function closeSlider(sliderId) {
    document.getElementById(sliderId).classList.remove('active');
}

// Popup functions
// Open popup
function openPopup(popupId) {
    document.getElementById(popupId).classList.add('active');
}

// Close popup
function closePopup(popupId) {
    document.getElementById(popupId).classList.remove('active');
}

// Cart Section
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const bookId = this.getAttribute('data-id');
        // Add book to cart in local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(bookId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Book added to cart!');
    });
});
