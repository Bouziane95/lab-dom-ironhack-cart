// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = price.innerHTML * quantity.value;
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName("product");
  let total = Array.from(allProducts).map((item) => updateSubtotal(item).innerText);

  // ITERATION 3
  //... your code goes here
  let displayTotal = document.querySelector("#total-value span");
  function totalReducer(sum, item){
    //+ before to convert them into numbers because they are string right now
    console.log(sum.innerText);
    console.log(item.innerText);
    return +sum.innerText + +item.innerText;
  }
  displayTotal.innerText = total.reduce((acc, value) => acc + +value, 0);
  // console.log(displayTotal.innerText);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.outerHTML = "";
  //update the price
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("add an object");
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((btn) => btn.onclick = removeProduct);

  const createBtn = document.getElementById("create");
  createBtn.addEventListener('click', createProduct);


});
