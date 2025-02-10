const pool = require('../config/db');

const createOrder = async (req, res) => {
  const { userId, products } = req.body;
  try {
    const result = await pool.query('INSERT INTO orders (user_id, products) VALUES ($1, $2) RETURNING *', [userId, products]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createOrder, getOrderById };