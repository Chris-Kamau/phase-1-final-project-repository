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
      <td><button class="btn btn-danger" id="delete">Delete</button></td>
    `
    let deleteButton = tableRow.querySelector("#delete")
    deleteButton.addEventListener("click", () => {
      deleteLiquor(liquor.id)
      tableRow.remove()
    })
    document.querySelector("#table-body").append(tableRow)
  }
  
  function getLiquors() {
    fetch("http://localhost:5000/liquors")
    .then(res => res.json())
    .then(liquors => 
      liquors.forEach((liquor) => {
        addLiquor(liquor)
      })
      )
  }
  getLiquors()
  
//   // function to collect data
//   let formData;
  
//   function collectFormData() {
//     let form = document.querySelector("#form")
//     form.addEventListener("submit", (e) => {
//       e.preventDefault()
//       formData = {
//         image: e.target.image.value,
//         name: e.target.name.value,
//         price: e.target.price.value,
//         description: e.target.description.value,
//         origin: e.target.origin.value,
//         brand: e.target.brand.value,
//         quantity: e.target.quantity.value
  
//       }
//       postLiquors()
//     })
//   }
//   collectFormData()
  
//   // POST to database
//   function postLiquors() {
//     fetch("http://localhost:5000/liquors", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(res => res.json())
//     .then(products => console.log(liquors))
//   }
  

// // Function to delete product
// function deleteLiquor(id) {
//     fetch(`http://localhost:5000/liquors/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type" : "application/json"
//       }
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
      
//   }
  