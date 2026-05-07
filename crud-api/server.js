const express = require('express');
const app = express();

const userRoutes = require('./routes/users');

// Middleware
app.use(express.json()); // parse JSON body

// Routes
app.use('/users', userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});