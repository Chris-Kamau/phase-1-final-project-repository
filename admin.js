// function to create table 
function addLiquor(liquor) {
    let tableRow = document.createElement("tr")  // create table row element
    tableRow.id = "table-row"  // set table row id
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
      <td><button class="btn btn-danger" id="delete">Delete</button></td>
    `  // populate table row with liquor data
    let deleteButton = tableRow.querySelector("#delete")  // select the delete button in the row
    deleteButton.addEventListener("click", () => {  // add event listener to delete button
      deleteLiquor(liquor.id)  // call deleteLiquor function with liquor id as parameter
      tableRow.remove()  // remove the deleted row from the table
    })
    document.querySelector("#table-body").append(tableRow)  // add the populated row to the table body
}
  
function getLiquors() {
    fetch("http://localhost:5000/liquors")  // fetch liquor data from server
    .then(res => res.json())
    .then(liquors => 
      liquors.forEach((liquor) => {
        addLiquor(liquor)  // add each liquor to the table
      })
      )
}
getLiquors()  // call getLiquors function to populate the table with liquor data
  
// function to collect data
let formData;

function collectFormData() {
    let form = document.querySelector("#form")  // select the form element
    form.addEventListener("submit", (e) => {  // add submit event listener to the form
      e.preventDefault()  // prevent the form from submitting and refreshing the page
      formData = {
        image: e.target.image.value,
        name: e.target.name.value,
        price: e.target.price.value,
        description: e.target.description.value,
        origin: e.target.origin.value,
        brand: e.target.brand.value,
        quantity: e.target.quantity.value
      }  // populate the formData object with form data
      postLiquors()  // call postLiquors function to add the new liquor to the server and table
    })
}
collectFormData()  // call collectFormData function to listen for form submission

// function to add new liquor to server and table
function postLiquors() {
    fetch("http://localhost:5000/liquors", {
      method: "POST",  // set HTTP method to POST
      headers: {
        "Content-Type": "application/json"  // set request headers
      },
      body: JSON.stringify(formData)  // convert form data to JSON and include it in the request body
    })
    .then(res => res.json())
    .then(products => console.log(liquors))  // log the updated list of liquors to the console
}

// function to delete liquor from server and table
function deleteLiquor(id) {
    fetch(`http://localhost:5000/liquors/${id}`, {
      method: "DELETE",  // set HTTP method

      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
      
  }
  