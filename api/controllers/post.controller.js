// getInfo, postPost, getComments, postComment, getLikes, postLike
const PostModel = require("../models/post.model");
const LikeModel = require("../models/like.model");
const CommentModel = require("../models/comment.model");
const asyncHandler = require("../middlewares/async");

const getInfo = asyncHandler(async (req, res, next) => {
	const id = req.params.id;
	const post = await PostModel.findOne({ id });
	const comments = await CommentModel.find({ post: post._id });
	const likes = await LikeModel.find({ post: post._id });
	return res
		.status(200)
		.json({ status: "ok", data: { post, comments, likes } });
});

const postPost = asyncHandler(async (req, res, next) => {
	const { tokenID, contractAddr, description } = req.body;
	const author = req.user._id;
	const post = await PostModel.create({
		tokenID,
		contractAddr,
		description,
		author,
	});
	return res.status(200).json({ status: "ok", data: { post } });
});

const getComments = asyncHandler(async (req, res, next) => {
	const comments = await CommentModel.find({ post: req.params.id });
	return res.status(200).json({ status: "ok", data: { comments } });
});

const postComment = asyncHandler(async (req, res, next) => {
	const comment = await CommentModel.create({
		post: req.params.id,
		author: req.user._id,
		content: req.body.content,
	});
	return res.status(200).json({ status: "ok", data: { comment } });
});

const getLikes = asyncHandler(async (req, res, next) => {
	const likes = await LikeModel.find({ post: req.params.id });
	return res.status(200).json({ status: "ok", data: { likes } });
});

const postLike = asyncHandler(async (req, res, next) => {
	const like = await LikeModel.create({
		post: req.params.id,
		author: req.user._id,
	});
	return res.status(200).json({ status: "ok", data: { like } });
});

module.exports = {
	postPost,
	getInfo,
	getComments,
	postComment,
	getLikes,
	postLike,
};
