 

const db = require("../db/categoryQueries");
const toolDb = require("../db/toolQueries");


  
 async function getCategory(req, res) {
   
    const categoryId = req.params.id; 
   const result = await db.getCategory({ id: categoryId });
    const category = result;

    const tools = await toolDb.getToolsByCategoryId(categoryId);
    
    res.render("singleCategory", { category: category , tools: tools});
    
    
   
} 

function showAddCategoryForm(req, res) {
    res.render("addCategory");
}


async function deleteCategory(req, res) {
    const categoryId = req.params.id;
    await db.deleteCategory(categoryId);
    res.redirect("/categories");
}
 

module.exports = {

  getCategory,
  deleteCategory,
    showAddCategoryForm
};
   
 