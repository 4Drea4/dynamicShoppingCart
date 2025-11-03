const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//reflecting real-time price changes.
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

//Add items to their cart dynamically.
addProductButton.addEventListener("click", function () {
    const productName = productNameInput.value.trim();

    if (productName === "") {
      alert("Please enter an item!");
      return;
    }

    const li = document.createElement("li");
    li.textContent =productName;
    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    li.appendChild(addButton);

    cart.appendChild(li);
});

//View the items they have added, along with their prices and quantities.

