require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: logs every request
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}, Method: ${req.method}`);
  next(); // move to next route or middleware
});

// Middleware: parse JSON body (for POST requests)
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// Route with error
app.get("/error", (req, res, next) => {
  const err = new Error("This is a forced error!");
  next(err); // send error to error-handling middleware
});

// 404 Handler: unknown routes
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);        // logs the stack trace
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
