const router = require("express").Router();
const MovieController = require("../controllers/MovieController");

//  Index route for movies

router.get("/", MovieController.Index);

// Show route for movies

router.get("/:id", MovieController.Show);

// Store movie review
router.post("/:id/review", MovieController.storeReview);
module.exports = router;
