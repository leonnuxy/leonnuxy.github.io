const books = [
    {
        title: "Book Title 1",
        author: "Author Name 1",
        price: "$10.00",
        image: "path/to/book-cover1.jpg",
        id: 1
    },
    {
        title: "Book Title 2",
        author: "Author Name 2",
        price: "$12.00",
        image: "path/to/book-cover2.jpg",
        id: 2
    },
    {
        title: "Book Title 3",
        author: "Author Name 3",
        price: "$15.00",
        image: "path/to/book-cover3.jpg",
        id: 3
    }
];


const bookGrid = document.querySelector('.book-grid');

books.forEach(book => {
    const bookCard = `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
            <button class="add-to-cart-btn" data-id="${book.id}">Add to Cart</button>
        </div>        <div class="product" data-pid="${book.id}">
            <div class="product-tile">
                <div class="image-container">
                    <div class="image-container-inner">
                        <img class="tile-image" src="${book.imageSrc}" alt="${book.title}" title="${book.title}" loading="eager">
                    </div>
                </div>
                <div class="tile-body">
                    <div class="pdp-link">
                        <h3>${book.title}</h3>
                    </div>
                    <span class="tile-text-light mouse">
                        <span class="tile-text-light label-4">${book.author}</span>
                    </span>
                    <span class="tile-text-light mouse variant-format-label">${book.format}</span>
                    <div class="price">
                        <span class="price-wrapper">
                            <span class="sales sale-true">
                                <span class="value">
                                    ${book.price}
                                </span>
                            </span>
                        </span>
                    </div>
                    <button class="add-to-cart-btn" data-id="${book.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    bookGrid.innerHTML += bookCard;
});
