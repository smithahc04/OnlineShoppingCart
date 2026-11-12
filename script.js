let cart = [];

const products = document.querySelectorAll(".product");
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

products.forEach(product => {
    const button = product.querySelector("button");

    button.addEventListener("click", () => {
        const name = product.querySelector("h3").innerText;

        const price = parseInt(
            product.querySelector("p").innerText.replace("Price: ₹", "")
        );

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        displayCart();
    });
});

function displayCart() {
    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total = total + (item.price * item.quantity);

        const itemDiv = document.createElement("div");

        itemDiv.innerHTML = `
            <p>
                <b>${item.name}</b> - ₹${item.price}

                <br>

                Quantity:
                <button onclick="decreaseQuantity(${index})">-</button>
                ${item.quantity}
                <button onclick="increaseQuantity(${index})">+</button>

                <button onclick="removeItem(${index})">Remove</button>
            </p>

            <hr>
        `;

        cartDiv.appendChild(itemDiv);
    });

    totalSpan.innerText = total;
}

function increaseQuantity(index) {
    cart[index].quantity++;
    displayCart();
}

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }

    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}


// Checkout validation

const placeOrderButton = document.getElementById("place-order");

placeOrderButton.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const message = document.getElementById("message");


    if (cart.length === 0) {
        message.innerText = "Please add a product to the cart.";
        return;
    }


    if (name === "") {
        message.innerText = "Please enter your name.";
        return;
    }


    if (!email.includes("@") || !email.includes(".")) {
        message.innerText = "Please enter a valid email.";
        return;
    }


    if (phone.length !== 10 || isNaN(phone)) {
        message.innerText = "Phone number must contain 10 digits.";
        return;
    }


    if (address === "") {
        message.innerText = "Please enter your address.";
        return;
    }


    message.innerText = "Order placed successfully!";
});