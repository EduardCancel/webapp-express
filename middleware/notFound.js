const notFound = (req, res) => {
  res.status(404).send("Sorry can't find that!");
};

module.exports = notFound;
