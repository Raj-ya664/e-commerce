let cartCount = 0;

function addItemToCart() {
    cartCount++;
    document.querySelector('a[href="#cart"]').textContent = `Cart (${cartCount})`;
}
