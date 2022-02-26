const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
	{
		tokenID: {
			type: String,
			required: [true, "Token id of NFT is required"],
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
	},
	{
		timestamps: true,
	}
);

module.exports = new mongoose.Model("Post", PostSchema);
