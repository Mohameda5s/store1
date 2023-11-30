let cartItems = [];

function addToCart(productId) {
    // In a real application, you would fetch product details from a database
    const product = {
        id: productId,
        name: `Product ${productId}`,
        price: productId * 10,
    };

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            ...product,
            quantity: 1,
        });
    }

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const cartCountElement = document.getElementById('cart-count');

    // Clear previous items
    cartList.innerHTML = '';

    let total = 0;
    let itemCount = 0;

    // Populate the cart with items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    totalElement.textContent = `$${total.toFixed(2)}`;
    cartCountElement.textContent = itemCount.toString();
}

function checkout() {
    alert('Thank you for your purchase!');
    cartItems = [];
    updateCart();
}
