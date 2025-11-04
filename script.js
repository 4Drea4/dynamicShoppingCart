const productNameInput = document.getElementById('product-name');//input for product name
const productPriceInput = document.getElementById('product-price'); //input for product price
const addProductButton = document.getElementById('add-product');//button to add item to ul
const cart = document.getElementById('cart'); //ul container is the cart
const totalPriceSpan = document.getElementById('total-price'); //total price will change dynamically
 
let totalPrice = 0;


//Creating the Li with the price, product and remove button

addProductButton.addEventListener("click", function () {
  const productName = productNameInput.value.trim(); //creating a variable for name input
  const productPrice = productPriceInput.value.trim();//creating a variable for price input


  if (productName === "") {//if product name input is empty
    alert("Please enter an item!"); //give an alert telling user to put one in 
    return;
  }
  if
    (productPrice === "") {//if product price input is empty
      alert("Please enter a price!"); //give an alert telling user to put one in 
      return;
  }

  // Creating a variable to create list item
  const li = document.createElement("li");
  li.textContent = productName + " - $" + productPrice;

  //creating remove button
  const addButton = document.createElement("button");
  addButton.textContent = "Remove";
  li.appendChild(addButton);

  cart.appendChild(li);
});







// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}