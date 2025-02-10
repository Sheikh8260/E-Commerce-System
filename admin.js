const pool = require('../config/db');

const manageProducts = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price } = req.body;
  try {
    const result = await pool.query('UPDATE products SET name = $1, description = $2, category = $3, price = $4 WHERE id = $5 RETURNING *', [name, description, category, price, id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const manageOrders = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await pool.query('UPDATE orders SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { manageProducts, manageOrders };