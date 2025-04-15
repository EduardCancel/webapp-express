const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

//  Middleware

// Cors
app.use(
  cors({
    origin: process.env.FRONT_URL || "http://localhost:5173",
  })
);

// Body parser middleware
app.use(express.json());

//  Static assets middleware
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

//  Routes
app.get("/", (req, res) => {
  res.send("Welcome in your movie server");
});

// Index route for movies
app.get("/api/v1/movies", (req, res) => {
  res.json({ message: `This is the index route for movies` });
});

// Show route for movies
app.get("/api/v1/movies/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `This is the show route for movie with ID: ${req.params.id}`,
  });
});

// Middleware for 404 error
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
