let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(item + " added to cart");
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if(savedCart) cart = savedCart;
    const cartList = document.getElementById('cart-list');
    if(cartList) {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartList.appendChild(li);
        });
    }
}

function placeOrder() {
    if(cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    alert("Order placed: " + cart.join(', '));
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

window.onload = loadCart;
