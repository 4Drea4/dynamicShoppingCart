const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
const shopList = document.querySelector('.list');
const counter =document.getElementById('item-count');

 
let totalPrice = 0;
 
// Function to add the Price and the Product Item Name to the Ul
 
addProductButton.addEventListener('click', () => { //created event listener for input button
 const productName = productNameInput.value.trim(); //declaring variable to take the name
 const itemPrice = productPriceInput.value; //declaring variable to collect the price.

//creating the new list item 
const li = document.createElement('li'); //creating the list item
li.textContent = productName + '$' + itemPrice; //concatenation to store the item and price

// showing list item and price to the screen. 
shopList.appendChild(li);
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