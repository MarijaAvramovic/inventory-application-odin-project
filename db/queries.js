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

async function addNewMessage(user, text) {
    await pool.query(
    "INSERT INTO messages (username, text) VALUES ($1, $2) RETURNING *",
    [user, text]
  );
 
}


async function getMessageById(id) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
}


async function deleteMessageById(id) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}


module.exports = {
  getAll,
  addNewMessage,
  getMessageById,
  deleteMessageById
};