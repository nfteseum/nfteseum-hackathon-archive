const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
		post: {
			type: mongoose.Schema.ObjectId,
			ref: "Post",
		},
		content: {
			type: String,
			required: [true, "Comment body required"],
			maxlength: [200, "Comment can not be more than 200 characters"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = new mongoose.model("Comment", CommentSchema);
