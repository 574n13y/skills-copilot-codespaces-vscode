// Create web server and listen on port 3000
// Import express module
const express = require('express');
// Import body-parser module
const bodyParser = require('body-parser');
// Import comments module
const comments = require('./comments');
// Create express web server
const app = express();
// Create port
const port = 3000;

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create GET route to retrieve all comments
app.get('/comments', (req, res) => {
  res.json(comments.getAll());
});

// Create POST route to add new comment
app.post('/comments', (req, res) => {
  const { name, message } = req.body;
  // Check if name and message are not empty
  if (name && message) {
    const newComment = comments.add(name, message);
    res.json(newComment);
  } else {
    res.status(400).send('Name and message are required');
  }
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});