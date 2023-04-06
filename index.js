// function to display liquor

function displayLiquor(liquor) {
  let card = document.createElement("li")
  card.className = "card col-2 p-0 m-4"
  card.dataset.id = liquor.id
  card.innerHTML = `
    <img src="${liquor.image}" class="card-img-top" alt="${liquor.name}" title="Click to view details">
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
        <a href="#" class="btn btn-warning">Add to cart</a>
      </div>
    `
  })

  card.addEventListener("mouseover", () => {
    const image = card.querySelector(".card-img-top")
    image.setAttribute("title", "Click to view details")
  })

  document.querySelector("#item-list").append(card)
}


// Function to fetch products from db.json
function fetchLiquors(){
fetch("http://localhost:5000/liquors")
.then(res => res.json())
.then((liquors) => {
  liquors.forEach((liquor) => {
    displayLiquor(liquor)
  })
})
}

fetchLiquors()


// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault()

  // Clear input values
  document.querySelector("#name").value = ""
  document.querySelector("#email").value = ""
  document.querySelector("#message").value = ""

  // Display success message
  const successMsg = document.createElement("div")
  successMsg.classList.add("alert", "alert-success")
  successMsg.setAttribute("role", "alert")
  successMsg.textContent = "Thank you for your feedback!"
  document.querySelector("#formId").append(successMsg)

  // Send form data to server (not implemented)
}

document.querySelector("#formId").addEventListener("submit", handleFormSubmit)


