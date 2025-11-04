const productNameInput = document.getElementById('product-name');//Where users type in their item
const productPriceInput = document.getElementById('product-price');//where users enter the price
const addProductButton = document.getElementById('add-product');//the input button
const cart = document.getElementById('cart');//the cart we will move items into and track prices
const totalPriceSpan = document.getElementById('total-price'); //the span where total price will be displayed
const shopList = document.querySelector('.list');//where we will originally display our items
const counter =document.getElementById('item-count');//will need to have a sum of these or reflect when things are updated

 
let totalPrice = 0;
 
// Function to add the Price and the Product Item Name to the Ul
 
addProductButton.addEventListener('click', () => { //created event listener for input button
 const productName = productNameInput.value.trim(); //declaring variable to take the name
 const itemPrice = productPriceInput.value; //declaring variable to collect the price.

//creating the new list item 
const li = document.createElement('li'); //creating the list item
li.textContent = productName + ' $' + itemPrice; //concatenation to store the item and price


//creating button on each list item. 

const moveToCart = document.createElement('button');
//moveToCart.textContent = addToCart; //setting up the button
moveToCart.appendChild(document.query) 



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