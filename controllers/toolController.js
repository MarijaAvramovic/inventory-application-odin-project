 

 const db = require("../db/toolQueries");


  
 async function getTool(req, res) {
   
    const toolId = req.params.id;
    const tool = await db.getTool(toolId);
    console.log(tool);
    
    res.render("singleTool", { tool: tool });
    
    
   
} 
 

module.exports = {

  getTool,
   
};