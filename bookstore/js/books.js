document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "Blue Ocean", author: "John Doe", price: "$28.99", old_price: "$38.99", image: "books/images/image.png", id: 1, category: "Fiction" },
        { title: "Red Heart", author: "Aumkerr Helllk", price: "$10.99", old_price: "$30.00", image: "books/images/image_copy_1.png", id: 2, category: "Non-Fiction" },
        { title: "Serenity", author: "Yarr Deren", price: "$12.99", old_price: "$32.99", image: "books/images/image_copy_2.png", id: 3, category: "Non-Fiction" },
        { title: "Charmers", author: "Hadly Chase", price: "$24.99", old_price: "$49.99", image: "books/images/image_copy_3.png", id: 4, category: "Non-Fiction" },
        { title: "Dr. House", author: "John Kerr", price: "$15.99", old_price: "$42.99", image: "books/images/image_copy_4.png", id: 5, category: "Non-Fiction" },
        { title: "Fully Charged", author: "Authur Seth", price: "$30.99", old_price: "$41.00", image: "books/images/image_copy_5.png", id: 6, category: "Non-Fiction" },
        { title: "Half Sparrow", author: "Declan Rice", price: "$12.99", old_price: "$32.99", image: "books/images/image_copy_6.png", id: 7, category: "Fiction" },
        { title: "Hold The Door", author: "John Kerr", price: "$64.99", old_price: "$79.99", image: "books/images/image_copy_7.png", id: 8, category: "Fiction" },
        { title: "Grey Eagle", author: "Arthur Fils", price: "$24.99", old_price: "$42.00", image: "books/images/image_copy_8.png", id: 9, category: "Non-Fiction" },
        { title: "Train Farm", author: "Sarah Conor", price: "$31.99", old_price: "$59.00", image: "books/images/image_copy_9.png", id: 10, category: "Non-Fiction" },
        { title: "Texas Living", author: "John Kerr", price: "$12.99", old_price: "$32.99", image: "books/images/image_copy_10.png", id: 11, category: "Fiction" }
    ];

    // Get a unique list of authors
    const authors = [...new Set(books.map(book => book.author))];

    // Find the author dropdown menu in the DOM
    const authorDropdown = document.getElementById('author-dropdown');

    // Generate the "All Authors" option
    const allAuthorsLi = document.createElement('li');
    const allAuthorsA = document.createElement('a');
    allAuthorsA.href = "#";
    allAuthorsA.textContent = "All Authors";
    allAuthorsLi.appendChild(allAuthorsA);
    authorDropdown.insertBefore(allAuthorsLi, authorDropdown.firstChild);

    // Generate the list items for the dropdown menu
    authors.forEach(function(author) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.title = author;
        a.textContent = author;
        li.appendChild(a);
        authorDropdown.appendChild(li);
    });

    // Find the products container
    const productsContainer = document.getElementById('products-container');

    // Function to create product card
    function createProductCard(book) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.setAttribute('data-author', book.author);
        productDiv.setAttribute('category', book.category);

        const productTileDiv = document.createElement('div');
        productTileDiv.className = 'product-tile';

        const imageContainerDiv = document.createElement('div');
        imageContainerDiv.className = 'image-container';

        const imageContainerInnerDiv = document.createElement('div');
        imageContainerInnerDiv.className = 'image-container-inner';

        const img = document.createElement('img');
        img.className = 'tile-image';
        img.src = book.image;
        img.alt = book.title;
        img.title = book.title;

        const tileBodyDiv = document.createElement('div');
        tileBodyDiv.className = 'tile-body';

        const h3 = document.createElement('h3');
        h3.textContent = book.title;

        const authorSpan = document.createElement('span');
        authorSpan.textContent = book.author;

        const priceDiv = document.createElement('div');
        priceDiv.className = 'price';

        const oldPriceSpan = document.createElement('span');
        oldPriceSpan.className = 'old-price';
        oldPriceSpan.textContent = book.old_price;

        const priceValueSpan = document.createElement('span');
        priceValueSpan.className = 'value';
        priceValueSpan.textContent = book.price;

        const button = document.createElement('button');
        button.className = 'add-to-cart-btn';
        button.textContent = 'Add to Cart';

        // Append elements to build the product card structure
        imageContainerInnerDiv.appendChild(img);
        imageContainerDiv.appendChild(imageContainerInnerDiv);
        productTileDiv.appendChild(imageContainerDiv);

        tileBodyDiv.appendChild(h3);
        tileBodyDiv.appendChild(authorSpan);
        priceDiv.appendChild(oldPriceSpan);
        priceDiv.appendChild(priceValueSpan);
        tileBodyDiv.appendChild(priceDiv);
        tileBodyDiv.appendChild(button);

        productTileDiv.appendChild(tileBodyDiv);
        productDiv.appendChild(productTileDiv);

        return productDiv;
    }

    // Generate and insert all product cards
    books.forEach(function(book) {
        const productCard = createProductCard(book);
        productsContainer.appendChild(productCard);
    });

    // Add event listeners to filter books by author when clicked
    authorDropdown.querySelectorAll('a').forEach(function(authorLink) {
        authorLink.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.textContent.trim();
            
            if (filter === "All Authors") {
                showAllBooks(); // Show all books if "All Authors" is selected
            } else {
                filterBooksByAuthor(filter); // Filter by selected author
            }
        });
    });
    
    // Function to show all books
    function showAllBooks() {
        const products = document.querySelectorAll('.product');
        products.forEach(function(product) {
            product.style.display = 'block'; // Show all products
        });
    }

    // Function to filter books by author
    function filterBooksByAuthor(author) {
        const products = document.querySelectorAll('.product');

        products.forEach(function(product) {
            const productAuthor = product.getAttribute('data-author');

            if (productAuthor === author) {
                product.style.display = 'block'; // Show products that match the author
            } else {
                product.style.display = 'none'; // Hide products that don't match the author
            }
        });
    }

    // Function to filter products based on the attribute and value
    function filterProducts(attribute, value) {
        const products = document.querySelectorAll('.product');
        products.forEach(function(product) {
            const productAttribute = product.getAttribute(attribute);

            if (productAttribute === value) {
                product.style.display = 'block'; // Show products that match the filter
            } else {
                product.style.display = 'none'; // Hide products that don't match
            }
        });
    }
});