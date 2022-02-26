const express = require("express");
const router = express.Router();

const {
	postInfo,
	getComments,
	postComment,
	getLikes,
	postLike,
} = require("../controllers/post.controller");

router.route("/:id").get(postInfo);
router.route("/:id/comment").get(getComments).put(postComment);
router.route("/:id/like").get(getLikes).put(postLike);

module.exports = router;
