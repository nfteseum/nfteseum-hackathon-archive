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

const userinfo = require("../middlewares/userinfo");

router.route("/").post(userinfo, postPost);
router.route("/:id").get(getInfo);
router
	.route("/:id/comment")
	.get(userinfo, getComments)
	.put(userinfo, postComment);
router.route("/:id/like").get(userinfo, getLikes).put(userinfo, postLike);

module.exports = router;
