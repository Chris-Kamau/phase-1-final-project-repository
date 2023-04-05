// function displayLiquor(liquor){
//   let card = document.createElement("li")
//   card.className = "card col-2 p-0 m-4"
//   card.innerHTML = `
// <img src="${liquor.image}" class="card-img-top" alt="${liquor.name}">
// <div class="card-body">
//   <h5 class="card-brand">${liquor.brand}</h5>
//   <h5 class="card-title">${liquor.name}</h5>
//   <p class="card-text">${liquor.price}</p>
//   <p class="card-text">${liquor.description}</p>
//   <p class="card-text">Country of origin: ${liquor.country_of_origin}</p>
//   <p class="card-text"> Available quantity is ${liquor.quantity}</p>
//   <a href="#" class="btn btn-primary">Add to cart</a>
// </div>
// </div>
//   `
//   document.querySelector(".item-list").append(card)

// }

// function fetchLiquors(){
// fetch("http://localhost:5000/liqours")
// .then(res => res.json())
// .then((liquors) => {
//   liquors.forEach((liquor) => {
//     displayLiquor(liquor)
//   })
// })
// }

// fetchLiquors()
