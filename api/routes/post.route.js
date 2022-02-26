const express = require("express");
const router = express.Router();

const {
	getInfo,
	postPost,
	getComments,
	postComment,
	getLikes,
	postLike,
} = require("../controllers/post.controller");

router.route("/").post(postPost);
router.route("/:id").get(getInfo);
router.route("/:id/comment").get(getComments).put(postComment);
router.route("/:id/like").get(getLikes).put(postLike);

module.exports = router;
