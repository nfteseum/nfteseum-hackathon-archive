const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
	},
	post: {
		type: mongoose.Schema.ObjectId,
		ref: "Post",
	},
});

module.exports = new mongoose.model("Like", LikeSchema);
