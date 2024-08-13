const express = require('express');
const bodyParser = require('body-parser');
const { signup } = require('./routes/signup');

const app = express();
const PORT = 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the /signup route
app.post('/signup', signup);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
