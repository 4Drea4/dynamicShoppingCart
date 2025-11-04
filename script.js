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

//messages for input
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
  li.dataset.price = productPrice ;// for the html data attribute
  li.textContent = productName + " - $" + productPrice;
  updateTotalPrice(productPrice); //passing the 
  //creating remove button
  const removeButton = document.createElement ("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function(event){

    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);   
    item.remove();

  }
)

  cart.appendChild(li);
  li.appendChild(removeButton);

});

// Function to update the total price
function updateTotalPrice(amount) {
  // console.log(typeof amount);
  totalPrice += Number(amount);
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
 
// // Function to remove an item
// function removeItem(event) {
//   const item = event.target.closest('li');
//   const price = parseFloat(item.dataset.price);
//   updateTotalPrice(-price);
//   item.remove();
// }