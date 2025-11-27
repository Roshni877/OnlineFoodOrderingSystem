let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD ITEM TO CART
function addToCart(name, price, image) {
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// LOAD CART ITEMS
function loadCart() {
    if (!window.location.pathname.includes("cart.html")) return;

    let box = document.getElementById("cartItems");
    box.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        box.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>
                <button class="remove-btn" onclick="deleteItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("totalAmount").innerText = "Total: ₹" + total;
}

// DELETE ITEM
function deleteItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
