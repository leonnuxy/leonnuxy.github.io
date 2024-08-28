
// Slider Functions
// Open slider 
function openSlider(sliderId) {
    document.getElementById(sliderId).classList.add('active');
}

// CLose slider
function closeSlider(sliderId) {
    document.getElementById(sliderId).classList.remove('active');
}

// Cart Actions:
// document.querySelectorAll('.add-to-cart-btn').forEach(function(button) {
//     button.addEventListener('click', function() {
//         const productTile = this.closest('.product-tile');
//         const bookTitle = productTile.querySelector('h3').textContent;
//         const bookPrice = productTile.querySelector('.value').textContent;

//         const cartSlider = document.getElementById('cart-slider');
//         const cartContent = cartSlider.querySelector('.slider-content');

//         let emptyCartText = cartContent.querySelector('h2');
//         if (emptyCartText) {
//             emptyCartText.remove();
//         }

//         const cartItem = document.createElement('div');
//         cartItem.className = 'cart-item';
//         cartItem.innerHTML = `
//             <h4>${bookTitle}</h4>
//             <div class="item-price">${bookPrice}</div>
//             <button class="remove-item" onclick="removeCartItem(this)">Remove</button>
//         `;

//         cartContent.appendChild(cartItem);

//         openSlider('cart-slider');
//     });
// });

document.querySelectorAll('.add-to-cart-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        // Your existing code to add the item to the cart goes here
        console.log('Add to Cart button was clicked.'); // Log the click event
        // Show the "Added to Cart" notification
        const notification = document.getElementById('cart-notification');
        notification.classList.add('show');
        notification.classList.remove('hidden');

        // Hide the notification after 3 seconds
        setTimeout(function() {
            notification.classList.remove('show');
            notification.classList.add('hidden');
        }, 3000);
    });
});

function removeCartItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();

    const cartContent = document.querySelector('#cart-slider .slider-content');
    if (cartContent.children.length === 1) {
        const emptyCartText = document.createElement('h2');
        emptyCartText.textContent = "Your Cart is Empty";
        cartContent.appendChild(emptyCartText);
    }
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
