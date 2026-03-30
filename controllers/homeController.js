 

 const db = require("../db/queries");


 async function getAll(req, res) {
   
    const result = await db.getAll();
     console.log(result);
    res.render("index", { categories: result.categories, tools: result.tools });
}

 async function getAllCategories(req, res) {
   
     const categories = await db.getAllCategories();
    
    res.render("categories", { categories: categories});
   
} 

async function getAllTools(req, res) {
   
     
    const tools = await db.getAllTools();
    res.render("tools", { tools: tools });
   
} 



module.exports = {
  getAll,
  getAllCategories,
    getAllTools
   
} 


 