 

 const db = require("../db/toolQueries");


  
 async function getTool(req, res) {
   
    const toolId = req.params.id;
    const tool = await db.getTool(toolId);
    console.log(tool);
    
    res.render("singleTool", { tool: tool });
    
    
   
} 

function showAddToolForm(req, res) {
    res.render("addTool");
}

async function deleteTool(req, res) {
    const toolId = req.params.id;
    await db.deleteTool(toolId);
    res.redirect("/tools");
}
module.exports = {

  getTool,
  deleteTool,
  showAddToolForm
};