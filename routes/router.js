const express = require("express");
const router = express.Router();
const controllers =  require("../controllers/homeController");
const categoryController = require("../controllers/categoryController");
const toolController = require("../controllers/toolController");


router.get("/", controllers.getAll);
router.get("/categories", controllers.getAllCategories);
router.get("/categories/new", categoryController.showAddCategoryForm);
router.post("/categories/new", categoryController.createCategoryPost);
router.get("/categories/:id", categoryController.getCategory);
 

router.get("/tools", controllers.getAllTools);
router.get("/tools/new", toolController.showAddToolForm);
router.post("/tools/new", toolController.createToolPost);
router.get("/tools/:id", toolController.getTool);
 

 router.get("/tools/update/:id", toolController.showUpdateToolForm);
 router.post("/tools/update/:id", toolController.updateToolPost);
 
 
 

router.get("/categories/delete/:id", categoryController.deleteCategory);
 
router.get("/tools/delete/:id", toolController.deleteTool);

 

//  , /addCategory , /addTool, // editCategory/:id //editTool:id, //deleteCategory:id, //deleteTool:id controlers / show all render index cat and tools /addCategory show form for Cat + submit post /addCategory / render catform toolform, post redirect / /addTool show form for Tool + submit post /addTool / render toolform /post redirect / /openCat:id /openTool:id / render css transition single center /deleteCat promp confirmation redirect to home / redirect / /deleteCat promp confirmation redirect to home / redirect / /editCat:id

module.exports = router;