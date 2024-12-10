// JavaScript to handle 'Add to Cart' functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

// JavaScript for Cart Button - Just an example of interaction
const cartButton = document.getElementById('cartButton');
cartButton.addEventListener('click', () => {
    alert('View Cart functionality coming soon!');
});
