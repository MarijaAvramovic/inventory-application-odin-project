 

const db = require("../db/categoryQueries");


  
 async function getCategory(req, res) {
   
    const categoryId = req.params.id; 
   const result = await db.getCategory({ id: categoryId });
    const category = result;        
    
    res.render("singleCategory", { category: category });
    
    
   
} 
 

module.exports = {

  getCategory,
   
};