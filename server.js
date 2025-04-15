const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const MovieRoutes = require("./routes/movies");
const serverError = require("./middleware/serverError");
const notFound = require("./middleware/notFound");

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

//  Routes
app.get("/", (req, res) => {
  res.send("Welcome in your movie server");
});

//  Use the movie routes
app.use("/api/v1/movies", MovieRoutes);

//  Middleware for 500 error
app.use(serverError);

// Middleware for 404 error
app.use(notFound);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
