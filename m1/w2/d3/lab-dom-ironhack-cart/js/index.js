// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const priceString = product.querySelector(".price span");
  const priceNum = parseInt(priceString.innerHTML);

  const quantity = product.querySelector(".quantity input");

  let subt = priceNum * quantity.value;
  console.log("subt :", subt);

  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = subt;

  return subt;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalTotal = 0;

  const allItems = document.querySelectorAll(".product");
  allItems.forEach((item) => {
    let subt = updateSubtotal(item);
    totalTotal += subt;
  });

  // ITERATION 3

  const totalShown = document.querySelector("#total-value span");
  totalShown.innerHTML = totalTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target.parentNode.parentNode);

  const removeProd = target.parentNode.parentNode;
  const tbody = target.parentNode.parentNode.parentNode;

  tbody.removeChild(removeProd);
}

// ITERATION 5

/* function createProduct() {
  const porName = document.querySelector(".create-product input:first-child");
  const porPrice = document.querySelector(
    ".create-product td:nth-child(2) input"
  );

  const genericRow = document.querySelector("tbody tr");
  const table = document.querySelector("tbody");

  const newRow = genericRow.cloneNode(true);
  table.appendChild(newRow);

  newRow.querySelector(".name span").innerHTML = porName.value;
  newRow.querySelector(".price span").innerHTML = porPrice.value;
}
 */

function createProduct() {
  const porName = document.querySelector(".create-product input:first-child");
  const porPrice = document.querySelector(
    ".create-product td:nth-child(2) input"
  );

  const table = document.querySelector("tbody");

  const newRow = document.createElement("tr");
  newRow.setAttribute("class", "product");

  newRow.innerHTML = `
    <td class="name">
      <span>${porName.value}</span>
    </td>
    <td class="price">$<span>${porPrice.value}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
    `;

  table.appendChild(newRow);

  const removeBtn = newRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const addPro = document.querySelector("#create");

  addPro.addEventListener("click", createProduct);

  //extra stuff - updates prices when there is any change on the quantity
  const quantity = document.querySelectorAll(".quantity input");
  quantity.forEach((input) => {
    input.addEventListener("change", calculateAll);
  });
});

// HTMLCollection - is not directly iterable by array methods (we have to copy it first)
// document.getElementsByClassName()
// document.getElementsByTagName()

const products = document.getElementsByClassName("product");
console.log("products :", products);

// Option 1
const productsArr = [...products];
productsArr.forEach((product) => {
  console.log(product);
});

// Option 2
for (let i = 0; i < products.length; i++) {
  products[i];
}

// NodeList - we can use array methods right away
// document.querySelectorAll()

// Single element
// document.getElementById()
// document.querySelector()   - it returns the first found occurence in the DOM tree
