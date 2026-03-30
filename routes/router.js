const express = require("express");
const router = express.Router();
const controllers =  require("../controllers/homeController");
const categoryController = require("../controllers/categoryController");
const toolController = require("../controllers/toolController");


router.get("/", controllers.getAll);
router.get("/categories", controllers.getAllCategories);
router.get("/categories/:id", categoryController.getCategory);

 

router.get("/tools", controllers.getAllTools);
router.get("/tools/:id", toolController.getTool);


router.get("/addCategory", (req, res) => {
  res.send("addCategory");
});

 

router.get("/addTool", (req, res) => {
  res.send("addTool");
});

router.post("/addCategory", (req, res) => {
  const { name } = req.body;
  res.send(`Category added: ${name}`);
});

router.post("/addTool", (req, res) => {
  const { name, category } = req.body;
  res.send(`Tool added: ${name} in category ${category}`);
});

router.get("/editCategory/:id", (req, res) => {
  const categoryId = req.params.id;
  res.send(`Edit category with ID: ${categoryId}`);
});

router.get("/editTool/:id", (req, res) => {
  const toolId = req.params.id;
  res.send(`Edit tool with ID: ${toolId}`);
});

router.post("/editCategory/:id", (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  res.send(`Category with ID: ${categoryId} updated to ${name}`);
});

router.post("/editTool/:id", (req, res) => {
  const toolId = req.params.id;
  const { name, category } = req.body;
  res.send(`Tool with ID: ${toolId} updated to ${name} in category ${category}`);
});

router.get("/deleteCategory/:id", (req, res) => {
  const categoryId = req.params.id;
  res.send(`Delete category with ID: ${categoryId}`);
});

router.get("/deleteTool/:id", (req, res) => {
  const toolId = req.params.id;
  res.send(`Delete tool with ID: ${toolId}`);
});



//  , /addCategory , /addTool, // editCategory/:id //editTool:id, //deleteCategory:id, //deleteTool:id controlers / show all render index cat and tools /addCategory show form for Cat + submit post /addCategory / render catform toolform, post redirect / /addTool show form for Tool + submit post /addTool / render toolform /post redirect / /openCat:id /openTool:id / render css transition single center /deleteCat promp confirmation redirect to home / redirect / /deleteCat promp confirmation redirect to home / redirect / /editCat:id

module.exports = router;