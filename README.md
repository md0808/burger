# Burger Button Application
https://burgers-md0808.herokuapp.com/

This application follows the series of events one would encounter when ordering a burger from a restaurant. Users are able to order the burger of their wildest dreams, see it appear with the other burgers available for consumption, and then press a devour button. At that point, the burger is marked as devoured, and appears in the cemetary of other burgers, also known as the right collumn.

<img width="1070" alt="Screen Shot 2019-12-15 at 12 20 16 PM" src="https://user-images.githubusercontent.com/51139840/70866959-754e1280-1f35-11ea-8bd4-68c89b098c50.png">

## How to Use

Add a burger using the form at the bottom. Remember: The world is your oyster. The sky is the limit.
When it appears in the list with the other burgers, you can chose to leave it for someone else, or devour it. 
Upon devouring, also remember: sometimes things in real life are better than on the internet.

## Technologies and Methods Used

* Javascript
* HTML/CSS
* Materialize
* MySQL
* Handlebars
* Node.js
* NPM
* Express.js
* Heroku
* ORM 
* CRUD
* MVC

## How it Works

Burgers are added to the MySQL database. By default, the boolean value of "Devoured" is false. This signals to handlebars to have the burger appear on the left collumn with a button that gives the user the option to Devour it. When the user pushes the button, the record in the database associated with that button is updated to "devoured: true", which removes it from the right column, and places it in the left. 

