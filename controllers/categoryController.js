 

 


  
 async function getCategory(req, res) {
   
    const categoryId = req.params.id;
    const category = { id: categoryId, name: `Category ${categoryId}` };
    
    res.render("singleCategory", { category: category });
    
    
   
} 
 

module.exports = {

  getCategory,
   
};