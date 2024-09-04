document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-bar input');
    const productsContainer = document.querySelector('.products-container');
    const noResults = document.createElement('div');

    noResults.textContent = 'No Matching Results';
    noResults.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px; color: #fff;';

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        let hasResults = false;

        productsContainer.innerHTML = ''; // Clear the products container

        products.forEach(function (product) {
            const title = product.querySelector('h3').textContent.toLowerCase();
            const author = product.querySelector('span').textContent.toLowerCase();

            if (title.includes(query) || author.includes(query)) {
                // Append matching products to the container
                productsContainer.appendChild(product);
                hasResults = true;
            }
        });

        if (!hasResults && query !== '') {
            productsContainer.appendChild(noResults);
        } else {
            noResults.remove();
        }
    });

    const products = document.querySelectorAll('.product-tile');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.nav-item.dropdown .dropdown-menu li a');
    const products = document.querySelectorAll('.product');

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            const filter = this.textContent.trim(); // Get the category text (e.g., "Fiction" or "Non-Fiction")

            // Loop through all products and show/hide them based on the selected filter
            products.forEach(function (product) {
                const category = product.getAttribute('category');

                if (category === filter) {
                    product.style.display = 'block'; // Show products that match the filter
                } else {
                    product.style.display = 'none'; // Hide products that don't match
                }
            });
        });
    });

    // Author filtering
    const authorItems = document.querySelectorAll('#author-dropdown li a');
    authorItems.forEach(function (authorItem) {
        authorItem.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            const filter = this.textContent.trim(); // Get the author text

            // Loop through all products and show/hide them based on the selected filter
            products.forEach(function (product) {
                const author = product.getAttribute('data-author');

                if (filter === "All Authors" || author === filter) {
                    product.style.display = 'block'; // Show all products if "All Authors" is selected or match the specific author
                } else {
                    product.style.display = 'none'; // Hide products that don't match the filter
                }
            });
        });
    });
});

