const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("index");
});

router.get("/addCategory", (req, res) => {
  res.send("addCategory");
});

router.get("/addTool", (req, res) => {
  res.send("addTool");
});

router.get("/editCategory/:id", (req, res) => {
  const categoryId = req.params.id;
  res.send(`Edit category with ID: ${categoryId}`);
});

router.get("/editTool/:id", (req, res) => {
  const toolId = req.params.id;
  res.send(`Edit tool with ID: ${toolId}`);
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