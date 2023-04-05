function displayLiquor(liquor){
  let card = document.createElement("li")
  card.className = "card col-2 p-0 m-4"
  card.dataset.id = liquor.id; // add data-id attribute
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
  document.querySelector("#item-list").append(card)
}


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
// function addLiquor() {
//   const form = document.querySelector('#add-liquor-form');
//   const data = new FormData(form);

//   fetch('http://localhost:5000/liqours', {
//     method: 'POST',
//     body: data
//   })
//   .then(res => res.json())
//   .then((liquor) => {
//     displayLiquor(liquor);
//     form.reset();
//   })
//   .catch((error) => {
//     console.error('Error adding liquor:', error);
//   });
// }

