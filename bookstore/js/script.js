var cart = {}; // Object to hold cart items

// Slider Functions
function openSlider(sliderId) {
    document.getElementById(sliderId).classList.add('active');
}

function closeSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    slider.classList.remove('active');
}

// Define removeCartItem outside of DOMContentLoaded
function removeCartItem(button) {
    const cartItem = button.closest('.cart-item');
    const bookTitle = cartItem.getAttribute('data-title');

    if (cart[bookTitle].quantity > 1) {
        cart[bookTitle].quantity -= 1;
        cartItem.querySelector('.item-quantity').textContent = `Qty: ${cart[bookTitle].quantity}`;
    } else {
        cartItem.remove();
        delete cart[bookTitle];
    }

    // Check if the cart is empty
    const cartContent = document.querySelector('#cart-slider .slider-content');
    if (Object.keys(cart).length === 0) { // If no items left in cart
        const emptyCartText = document.createElement('h2');
        emptyCartText.textContent = "Your Cart is Empty";
        cartContent.appendChild(emptyCartText);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            // Show the "Added to Cart" notification
            const notification = document.getElementById('cart-notification');
            notification.classList.add('show');
            notification.classList.remove('hidden');

            // Hide the notification after 3 seconds
            setTimeout(function() {
                notification.classList.remove('show');
                notification.classList.add('hidden');
            }, 3000);

            // Add the item to the cart slider
            const productTile = this.closest('.product-tile');
            const bookTitle = productTile.querySelector('h3').textContent;
            const bookPrice = productTile.querySelector('.value').textContent;

            const cartSlider = document.getElementById('cart-slider');
            const cartContent = cartSlider.querySelector('.slider-content');

            // If the book is already in the cart, increase its quantity
            if (cart[bookTitle]) {
                cart[bookTitle].quantity += 1;
                const existingItem = cartContent.querySelector(`[data-title="${bookTitle}"]`);
                existingItem.querySelector('.item-quantity').textContent = `Qty: ${cart[bookTitle].quantity}`;
            } else {
                // Add a new book to the cart
                cart[bookTitle] = {
                    title: bookTitle,
                    price: bookPrice,
                    quantity: 1
                };

                let emptyCartText = cartContent.querySelector('h2');
                if (emptyCartText) {
                    emptyCartText.remove();
                }

                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.setAttribute('data-title', bookTitle);
                cartItem.innerHTML = `
                    <h4>${bookTitle}</h4>
                    <div class="item-price">${bookPrice}</div>
                    <div class="item-quantity">Qty: 1</div>
                    <button class="remove-item" onclick="removeCartItem(this)">Remove</button>
                `;

                cartContent.appendChild(cartItem);
            }

            // Open the cart slider
            openSlider('cart-slider');
        });
    });
});