const express = require('express');
const router = express.Router();

let users = require('../data/users');


// GET all users
router.get('/', (req, res) => {
  res.json(users);
});


// GET single user
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});


// CREATE user
router.post('/', (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});


// UPDATE user
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const { name, email } = req.body;

  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
});


// DELETE user
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json(deletedUser);
});

module.exports = router;