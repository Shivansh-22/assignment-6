const express = require('express');
const app = express();
const db = require('./db'); // Connect to MongoDB (if using)

app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
