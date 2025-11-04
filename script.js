const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
const shopList = document.getElementById('list');

let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//reflecting real-time price changes.
 
// // Function to remove an item
// function removeItem(event) {
//   const item = event.target.closest('li');
//   const price = parseFloat(item.dataset.price);
//   updateTotalPrice(-price);
//   item.remove();
// }

// Event delegation: Attach one listener to the parent
shopList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
  event.target.parentElement.remove(); // Remove the item
  }
  });
  
  // Adding a new item
  addTaskButton.addEventListener('click', () => {
  const newTask = document.createElement('li');
  newTask.innerHTML = 'New Task <button class="delete">Delete</button>';
  todoList.appendChild(newTask);
  });

//Add items to their list . //View the items they have added, along with their prices and quantities.

addProductButton.addEventListener("click", function () {
    const productName = productNameInput.value.trim();
    const productPrice = productPriceInput.value.trim();

    if (productName === "") {
      alert("Please enter an item!");
    if (productPrice === ""){
        alert("Please enter a price!");
    }
      return;
    }

    const li = document.createElement("li");
    li.textContent =productName;
    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    li.appendChild(addButton);


    cart.appendChild(li);
});

//Add items to their cart .



