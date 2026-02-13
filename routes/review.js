const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewContoller = require("../controllers/review.js");

// REVIEW (post route)

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewContoller.createReview)
);

//Review (Delete route)

router.delete(
  "/:reviewId",
  isReviewAuthor,
  wrapAsync(reviewContoller.destroyReview)
);

module.exports = router;
