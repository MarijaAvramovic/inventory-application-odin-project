const pool  = require("./pool");

async function getTool(id) {
    const query =
`SELECT 
            t.*,
            c.name AS category_name
        FROM tools t
        LEFT JOIN categories c ON t.category_id = c.id
       WHERE t.id = $1;`

    const results = await pool.query(query, [id]);
    return results.rows[0]; 
}



async function getToolsByCategoryId(categoryId) {
    const query = `SELECT 
            t.*,
            c.name AS category_name
        FROM tools t
        LEFT JOIN categories c ON t.category_id = c.id
        WHERE c.id = $1
        ORDER BY t.name;`;
    const results = await pool.query(query, [categoryId]);
    return results.rows;
}

function showAddToolForm(req, res) {
    res.render("addTool");
}

async function createTool(data) {
    const query = "INSERT INTO tools (name, ahref, category_id) VALUES ($1, $2, $3)";
    await pool.query(query, [data.name, data.url, data.category_id]);
}

async function deleteTool(id) {
    const query = "DELETE FROM tools WHERE id = $1";
    await pool.query(query, [id]);
}

async function updateTool(id, name, url, categoryId) {
    const query = "UPDATE tools SET name = $1, ahref = $2, category_id = $3 WHERE id = $4";
    await pool.query(query, [name, url, categoryId, id]);
}

module.exports = {
    getTool,
    getToolsByCategoryId,
    deleteTool, 
    showAddToolForm,
    createTool,
    updateTool
};