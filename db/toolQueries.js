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

module.exports = {
    getTool
};