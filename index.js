// function to display liquor

function displayLiquor(liquor) {
  // create a new <li> element
  let card = document.createElement("li")
  // set its class and data attribute
  card.className = "card col-2 p-0 m-4"
  card.dataset.id = liquor.id
  // set its HTML content
  card.innerHTML = `
    <img src="${liquor.image}" class="card-img-top" alt="${liquor.name}" title="Click to view details">
    <div class="card-body">
      <h5 class="card-title">${liquor.name}</h5>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
  `
  // add a click event listener to toggle the card content
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
        <a href="#" class="btn btn-warning">Add to cart</a>
      </div>
    `
  })
  // add a mouseover event listener to update the image title attribute
  card.addEventListener("mouseover", () => {
    const image = card.querySelector(".card-img-top")
    image.setAttribute("title", "Click to view details")
  })
  // append the card to the #item-list element
  document.querySelector("#item-list").append(card)
}


// Function to fetch products from db.json
function fetchLiquors(){
  // make a GET request to the server
  fetch("http://localhost:5000/liquors")
  .then(res => res.json())
  .then((liquors) => {
    // iterate over the fetched liquors and display them
    liquors.forEach((liquor) => {
      displayLiquor(liquor)
    })
  })
}

// call the fetchLiquors function on page load
fetchLiquors()


// Function to handle form submission
function handleFormSubmit(event) {
  // prevent the default form submission behavior
  event.preventDefault()
  // clear the input values
  document.querySelector("#name").value = ""
  document.querySelector("#email").value = ""
  document.querySelector("#message").value = ""
  // create a success message element and append it to the form
  const successMsg = document.createElement("div")
  successMsg.classList.add("alert", "alert-success")
  successMsg.setAttribute("role", "alert")
  successMsg.textContent = "Thank you for your feedback!"
  document.querySelector("#formId").append(successMsg)
}

// add a submit event listener to the form
document.querySelector("#formId").addEventListener("submit", handleFormSubmit)
