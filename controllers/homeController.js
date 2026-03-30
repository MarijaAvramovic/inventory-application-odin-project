 

 


 async function getAll(req, res) {
   
    const categories = [
      { id: 1, name: "Frontend" },
      { id: 2, name: "Backend" },
      { id: 3, name: "DevOps" }
    ];
    const tools = [
      { id: 1, name: "React", categoryId: 1 },
      { id: 2, name: "Node.js", categoryId: 2 },
  
        { id: 3, name: "Docker", categoryId: 3 }

    ];
    res.render("index", { categories: categories, tools: tools });
   
} 

 async function getAllCategories(req, res) {
   
    const categories = [
      { id: 1, name: "Frontend" },
      { id: 2, name: "Backend" },
      { id: 3, name: "DevOps" }
    ];
    
    res.render("categories", { categories: categories});
   
} 



module.exports = {
  getAll,
  getAllCategories
   
};