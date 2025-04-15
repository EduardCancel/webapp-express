const connection = require("../data/db");

function Index(req, res) {
  res.json({
    message: "This is the index route for movies",
  });
}

function Show(req, res) {
  const { id } = req.params;
  res.json({
    message: `This is the show route for movie with ID: ${id}`,
  });
}

module.exports = {
  Index,
  Show,
};
