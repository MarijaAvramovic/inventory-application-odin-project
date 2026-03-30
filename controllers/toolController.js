 

 


  
 async function getTool(req, res) {
   
    const toolId = req.params.id;
    const tool = { id: toolId, name: `Tool ${toolId}` };
    
    res.render("singleTool", { tool: tool });
    
    
   
} 
 

module.exports = {

  getTool,
   
};