// Function to create table 
function addLiquor(liquor) {
    // Create a new row for the liquor
    let tableRow = document.createElement("tr")
    // Set the id of the row to "table-row"
    tableRow.id = "table-row"
    // Fill the row with data from the liquor object
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
    `
    // Add an event listener to the "Delete" button to call deleteLiquor() and remove the row from the table
    let deleteButton = tableRow.querySelector("#delete")
    deleteButton.addEventListener("click", () => {
      deleteLiquor(liquor.id)
      tableRow.remove()
    })
    // Add the row to the table body
    document.querySelector("#table-body").append(tableRow)
  }
  
  // Function to get all liquors from the server and add them to the table
  function getLiquors() {
    // Make a GET request to the server for all liquors
    fetch("http://localhost:5000/liquors")
      .then(res => res.json())
      .then(liquors => 
        // For each liquor, add a row to the table
        liquors.forEach((liquor) => {
          addLiquor(liquor)
        })
      )
  }
  // Call getLiquors() to populate the table with existing data
  getLiquors()
  
  // Function to collect form data when the form is submitted
  let formData;
  function collectFormData() {
    // Find the form element and add an event listener to it
    let form = document.querySelector("#form")
    form.addEventListener("submit", (e) => {
      // Prevent the default form submission behavior
      e.preventDefault()
      // Collect the form data into an object
      formData = {
        image: e.target.image.value,
        name: e.target.name.value,
        price: e.target.price.value,
        description: e.target.description.value,
        origin: e.target.origin.value,
        brand: e.target.brand.value,
        quantity: e.target.quantity.value
      }
      // Call postLiquors() to send the data to the server
      postLiquors()
    })
  }
  // Call collectFormData() to set up the form submission behavior
  collectFormData()
  
  // Function to send new liquor data to the server
  function postLiquors() {
    // Make a POST request to the server with the form data
    fetch("http://localhost:5000/liquors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(products => console.log(liquors))
  }
  
  // Function to delete a liquor from the server and remove its row from the table
  function deleteLiquor(id) {
    // Make a DELETE request to the server for the specified liquor id
    fetch(`http://localhost:5000/liquors/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
      
  }
  