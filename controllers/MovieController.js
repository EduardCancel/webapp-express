const connection = require("../data/db");

function Index(req, res) {
  //  SQL query to get all movies
  const sql = "SELECT * FROM movies";

  //  Execute the SQL query
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
}

function Show(req, res) {
  //  Take the ID from the request parameters
  const id = Number(req.params.id);

  // Get the movie with the given ID
  const sql = "SELECT * FROM movies WHERE id = ?";

  const sqlReview = "SELECT * FROM reviews WHERE movie_id = ?";

  //  Execute the SQL query
  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database query failed" });
    }

    // Check if the movie exists
    if (results.length === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const movie = results[0];

    connection.query(sqlReview, [id], (err, reviews) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database query failed" });
      }

      // Add the reviews to the movie object
      movie.reviews = reviews;

      // Return the movie details
      res.json(movie);
    });
  });
}

module.exports = {
  Index,
  Show,
};
