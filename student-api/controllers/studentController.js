const pool = require("../db");

exports.getStudents = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id"
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const result = await pool.query(
      "INSERT INTO students(name, email, age) VALUES($1,$2,$3) RETURNING *",
      [name, email, age]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM students WHERE id=$1",
      [req.params.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const result = await pool.query(
      `UPDATE students
       SET name=$1,email=$2,age=$3
       WHERE id=$4
       RETURNING *`,
      [name, email, age, req.params.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM students WHERE id=$1",
      [req.params.id]
    );

    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};