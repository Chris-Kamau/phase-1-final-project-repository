// function to display liquor

function displayLiquor(liquor){
  let card = document.createElement("li")
  card.className = "card col-2 p-0 m-4"
  card.dataset.id = liquor.id;
  card.innerHTML = `
    <img src="${liquor.image}" class="card-img-top" alt="${liquor.name}">
    <div class="card-body">
      <h5 class="card-title">${liquor.name}</h5>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
  `
  card.addEventListener("click", () => {
    card.innerHTML = `
      <img src="${liquor.image}" class="card-img-top" alt="${liquor.name}">
      <div class="card-body">
        <h5 class="card-title">${liquor.name}</h5>
        <p class="card-text">Ksh ${liquor.price}</p>
        <p class="card-text">${liquor.description}</p>
        <h5 class="card-brand">Country of origin: ${liquor.origin}</h5>
        <h5 class="card-brand">Type: ${liquor.brand}</h5>
        <p class="card-text"> Available quantity is ${liquor.quantity}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
        <button type="button" class="btn btn-danger" onclick="deleteLiquor(${liquor.id})">Delete</button>
      </div>
    `
  })

  document.querySelector("#item-list").append(card)
}

// Function to fetch products from db.json
function fetchLiquors(){
fetch("http://localhost:5000/liqours")
.then(res => res.json())
.then((liquors) => {
  liquors.forEach((liquor) => {
    displayLiquor(liquor)
  })
})
}

fetchLiquors()

// Function to delete product
function deleteLiquor(id) {
  fetch(`http://localhost:5000/liqours/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    const card = document.querySelector(`[data-id="${id}"]`);
    if (card) {
      card.remove();
    }
  })
  .catch((error) => {
    console.error('Error deleting liquor:', error);
  });
}

// function to create table 
function addLiquor(liquor) {
  let tableRow = document.createElement("tr")
  tableRow.id = "table-row"
  tableRow.innerHTML = `
  <th scope="row">${liquor.id}</th>
        <td>${liquor.image}</td>
        <td>${liquor.name}</td>
        <td>${liquor.price}</td>
        <td>${liquor.description}</td>
        <td>${liquor.origin}</td>
        <td>${liquor.brand}</td>
        <td>${liquor.quantity}</td>
        <td><button class="btn btn-success">Edit</button></td>
  `
  document.querySelector("#table-body").append(tableRow)
}

function getLiquors() {
  fetch("http://localhost:5000/liqours")
  .then(res => res.json())
  .then(liquors => 
    liquors.forEach((liquor) => {
      addLiquor(liquor)
    })
    )
}
getLiquors()

// function to collect data
let formData;

function collectFormData() {
  let form = document.querySelector("#form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    formData = {
      image: e.target.image.value,
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      origin: e.target.origin.value,
      brand: e.target.brand.value,
      quantity: e.target.quantity.value

    }
    postLiquors()
  })
}
collectFormData()

// POST to database
function postLiquors() {
  fetch("http://localhost:5000/liqours", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(products => console.log(liquors))
}
