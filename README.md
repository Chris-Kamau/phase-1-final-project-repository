# phase-1-final-project-repository
The project involved creation of an e-commerce website for the sale of drinks.
Data was generated on a db json file.
A html file was created to give the structure of the project and CSS used to style.
Fetch compenent was used in order to get this data for display on the browser.
A card was created in order to hold each product and was passed the properties of the data via string interpolation.
Event Listeners was added to the card in order to pick the click sound and show product detais.
Fetch request was then made to grab data from the db.json in order to display.
A form was then created that enables users to write comments about the products.
The displayLiquor() function takes a liquor object as a parameter and creates a new <li> element that contains an image, name, and "Add to cart" button. When the <li> element is clicked, its contents are replaced with more detailed information about the liquor, including price, description, brand, origin, and available quantity.

The fetchLiquors() function uses the Fetch API to retrieve an array of liquor objects from a local server, and then calls displayLiquor() for each object to display it on the page.

The handleFormSubmit() function is called when a form is submitted. It prevents the default form submission behavior, clears the input values, and displays a success message.

Finally, an event listener is added to the form to call the handleFormSubmit() function when it is submitted.


An admin page was then created to enable the admn do some CRUD operations.
The HTML file was created and styled with js to give its structure.
A form was then added to the body to enable an admin input new products and the functionality was executed on js.
A table was also created to display all the products and the features.
A delete button was then implimented that enabled the admin to delete products from the page.

addLiquor() function: This function creates a new table row in HTML and adds it to the table body. It also sets the row ID and populates the cells with data from the liquor object that is passed in as a parameter. It also adds event listeners to the delete button so that when it is clicked, it calls the deleteLiquor() function and removes the row from the table.

getLiquors() function: This function makes a GET request to the server to retrieve all the liquor objects stored in the database. Once the response is received, it parses the JSON data and calls the addLiquor() function for each liquor in the array.

collectFormData() function: This function collects the data entered into the form when it is submitted and stores it in the formData object. It also calls the postLiquors() function to send the data to the server.

postLiquors() function: This function makes a POST request to the server with the data stored in the formData object. It also sets the headers to specify that the data is in JSON format. Once the response is received, it logs the data to the console.

deleteLiquor() function: This function makes a DELETE request to the server to delete the liquor object with the specified ID. Once the response is received, it logs the data to the console.