const pool  = require("./pool");

async function getCategory(params) {
    const query = "SELECT * FROM categories WHERE id = $1";
    const results = await pool.query(query, [params.id]);
    return results.rows[0];
}



async function deleteCategory(id) {
    const query = "DELETE FROM categories WHERE id = $1";
    await pool.query(query, [id]);
}

async function createCategory(data) {
    const query = "INSERT INTO categories (name) VALUES ($1)";
    await pool.query(query, [data.name]);
}

module.exports = {
    getCategory,
    deleteCategory,
    createCategory
};