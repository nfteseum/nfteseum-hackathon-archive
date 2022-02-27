const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		address: {
			type: String,
			required: [true, "Wallet address required"],
			unique: [true, "Duplicate value"],
		},
		username: {
			type: String,
			maxlength: [50, "Username can not be more than 50 characters"],
		},
		bio: {
			type: String,
			maxlength: [200, "Bio can not be more than 200 characters"],
		},
		posts: {
			type: [mongoose.Schema.ObjectId],
			ref: "Post",
		},
		followers: {
			type: [mongoose.Schema.ObjectId],
			ref: "User",
		},
		following: {
			type: [mongoose.Schema.ObjectId],
			ref: "User",
		},
		nonce: {
			type: String,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

/*
UserSchema.virtual("followerCount").get(function () {
	return this.followers.length || 0;
});

UserSchema.virtual("followingCount").get(function () {
	return this.following.length || 0;
});
*/

UserSchema.pre("save", function () {
	this.nonce = Math.floor(Math.random() * 1000000).toString();
});

module.exports = mongoose.model("User", UserSchema);
