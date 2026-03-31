# inventory-application-odin-project

Live Demo: https://inventory-application-odin-project.onrender.com/

![inventory-app](./public/Screenshot%202026-03-30%20at%2011.50.53%20PM.pngpublic)



#  odin-steps
For this project we are going to create an Inventory management app for an imaginary store. It's a managing app for web dev.

The Inventory app has categories(front,back & full) and items(tools).When the user goes to the home-page they can choose a category to view, and then get a list of every item in that category. The app includes all of the CRUD methods for both tools and categories, so anybody that’s visiting the site can Create, Read, Update or Delete any tool or Category.

Steps:

Set up an Express project and a new PostgreSQL database.
All of the database tables and its fields: 
tables: categories and tools
Categories: id, name;
Tools: category_id, id_tools, name, link.


Set up the routes and controllers.

Create all of the ‘READ’ views (i.e. view category, and view item).
Create all the forms and build out the controllers you need for the create and update actions.
The delete functionality for item is easy. For categories only available if no tools assigned.  

Add dummy data via a script to your local database. Do this again when you deploy. 
Deploy it.


 

# my notes

index / nav foot main / main flex za kategorije/ grid za tools (name link) nav / home foot marija linkedin git hub katego btn next to head add new each catego edit delete open / css transition tools isto next to head da ima btn add new each tool edit delete open / css transition routes / , /addCategory , /addTool, // editCategory/:id //editTool:id, //deleteCategory:id, //deleteTool:id controlers / show all render index cat and tools /addCategory show form for Cat + submit post /addCategory / render catform toolform, post redirect / /addTool show form for Tool + submit post /addTool / render toolform /post redirect / /openCat:id /openTool:id / render css transition single center /deleteCat promp confirmation redirect to home / redirect / /deleteCat promp confirmation redirect to home / redirect / /editCat:id form already full on button edit and keep it on viewCat / redirect open queries select all / add new/ delete / edit // sve da radi na lokalnoj bazi form validation lesson // error kod add new i kod edit add css deploy ad prod db populate connect

- use:

express, ejs, dotenv, express-validator, pg


git@github.com:MarijaAvramovic/inventory-application-odin-project.git