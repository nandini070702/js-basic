//load env var 
//import express
//middleware:- parse JSON Body and logger for req


require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());


//logging request 
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});
  
//Home route created
app.get("/", (req, res) => {
    res.send("This is CRUD BASICS");
});

//userRoute import
const userRoutes = require("./routes/userRoutes.js");
app.use("/api/user", userRoutes);

//404 error handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});

//error handling middlewaree
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

//server starting
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
    
});



