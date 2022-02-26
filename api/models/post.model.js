const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
	{
		tokenID: {
			type: String,
			required: [true, "Token id of NFT is required"],
			unique: [true, "Duplicate value"],
		},
		contractAddr: {
			type: String,
			required: [true, "Contract address of NFT is required"],
		},
		comments: {
			type: [mongoose.Schema.ObjectId],
			ref: "Comment",
		},
		likes: {
			type: [mongoose.Schema.ObjectId],
			ref: "Like",
		},
		description: {
			type: String,
			required: [true, "Description is required"],
		},
		author: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = new mongoose.model("Post", PostSchema);
