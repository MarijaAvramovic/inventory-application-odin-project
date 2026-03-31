 

 const db = require("../db/toolQueries");
 const dbCategory = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");
const errs = require("../errors/errorMsgAll");


const validateTool = [
  body("name")
    .trim()
    .notEmpty().withMessage(errs.emptyErr)
    .isLength({ max: 14 }).withMessage(errs.lengthErr),

  body("url")
    .trim()
    .notEmpty().withMessage(errs.emptyErr)
    .isURL({ protocols: ["https"], require_protocol: true })
    .withMessage(errs.httpsErr),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),
];

  
 async function getTool(req, res) {
   
    const toolId = req.params.id;
    const tool = await db.getTool(toolId);
    console.log(tool);
    
    res.render("singleTool", { tool: tool });
    
    
   
} 

async function showAddToolForm(req, res) {
    const categories = await dbCategory.getAllCategories();
    res.render("addTool", { errors: [], categories: categories });
}


const createToolPost = [
  validateTool,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("addTool", {
        errors: errors.array(),
        categories: await dbCategory.getAllCategories()
      });
    }

    const data = matchedData(req);

    await db.createTool({
      name: data.name,
      url: data.url,
      category_id: data.category
    });

    res.redirect("/tools");
  },
];


const updateToolPost = [
  validateTool,
  async (req, res) => {
    const errors = validationResult(req);
    const toolId = req.params.id;

    const categories = await dbCategory.getAllCategories();
    const tool = await db.getTool(toolId);

    if (!errors.isEmpty()) {
      return res.status(400).render("updateTool", {
        errors: errors.array(),
        categories,
        tool,
        oldInput: req.body, // preserve input
      });
    }

    const data = matchedData(req, { locations: ["body"] });

    await db.updateTool(
      parseInt(toolId),
      data.name,
      data.url,
      parseInt(data.category)
    );

    res.redirect("/tools/" + toolId);
  },
];

async function deleteTool(req, res) {
    const toolId = req.params.id;               
 
    await db.deleteTool(toolId);

    res.redirect("/tools");
}
 

async function deleteTool(req, res) {
    const toolId = req.params.id;
    await db.deleteTool(toolId);
    res.redirect("/tools");
}


async function showUpdateToolForm(req, res) {
    const toolId = req.params.id;
    const tool = await db.getTool(toolId);
    const categories = await dbCategory.getAllCategories();
    res.render("updateTool", { tool: tool, categories: categories, errors: [],   oldInput: {} });
}


 
module.exports = {

  getTool,
  deleteTool,
  showAddToolForm,
    createToolPost,
    showUpdateToolForm,
    updateToolPost
 
};