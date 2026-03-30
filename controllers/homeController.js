 

 const db = require("../db/queries");


 async function getAll(req, res) {
   
    const result = await db.getAll();
     console.log(result);
    res.render("index", { categories: result.categories, tools: result.tools });
}

 async function getAllCategories(req, res) {
   
    const categories = [
      { id: 1, name: "Frontend" },
      { id: 2, name: "Backend" },
      { id: 3, name: "DevOps" }
    ];
    
    res.render("categories", { categories: categories});
   
} 

async function getAllTools(req, res) {
   
     
    const tools = [
      { id: 1, name: "React", categoryId: 1 },
      { id: 2, name: "Node.js", categoryId: 2 },
  
        { id: 3, name: "Docker", categoryId: 3 }

    ];
    res.render("tools", {  tools: tools });
   
} 



module.exports = {
  getAll,
  getAllCategories,
    getAllTools
   
};