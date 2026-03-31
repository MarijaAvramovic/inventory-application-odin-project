 

const db = require("../db/categoryQueries");
const toolDb = require("../db/toolQueries");
const errs = require("../errors/errorMsgAll");

const { body, validationResult, matchedData } = require("express-validator");


const validateCategory = [
  body("name")
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage(errs.lengthErr)
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage(errs.alphaErr),
];

  
 async function getCategory(req, res) {
   
    const categoryId = req.params.id; 
   const result = await db.getCategory({ id: categoryId });
    const category = result;

    const tools = await toolDb.getToolsByCategoryId(categoryId);
    
    res.render("singleCategory", { category: category , tools: tools});
    
    
   
} 

function showAddCategoryForm(req, res) {
    res.render("addCategory", { errors: [] });
}

const createCategoryPost = [
  validateCategory,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("addCategory", {
        errors: errors.array(),
      });
    }

    const data = matchedData(req);

    await db.createCategory({
      name: data.name,
    });

    res.redirect("/categories");
  },
];


async function deleteCategory(req, res) {
    const categoryId = req.params.id;
    await db.deleteCategory(categoryId);
    res.redirect("/categories");
}
 

module.exports = {

  getCategory,
  deleteCategory,
    showAddCategoryForm,
    createCategoryPost

};
   
 