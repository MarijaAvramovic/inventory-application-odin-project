const pool = require("./pool");

async function getAll() {
    const query = `SELECT 
            t.*,
            c.name AS category_name
        FROM tools t
        LEFT JOIN categories c ON t.category_id = c.id
        ORDER BY t.name;`;


  const results = await pool.query(query);
  const categoriesResult = await pool.query("SELECT * FROM categories ORDER BY name");

  return { categories: categoriesResult.rows, tools: results.rows };
}

async function getAllCategories() {
    const query = "SELECT * FROM categories ORDER BY name";
    const results = await pool.query(query);
    return results.rows;
}

async function getAllTools() {
    const query = `SELECT 
            t.*,
            c.name AS category_name
        FROM tools t
        LEFT JOIN categories c ON t.category_id = c.id
        ORDER BY t.name;`;
    const results = await pool.query(query);
    return results.rows;
}
 
module.exports = {
  getAll,
  getAllCategories,
  getAllTools
};
  
 
 