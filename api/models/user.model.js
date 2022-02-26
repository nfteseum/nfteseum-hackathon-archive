const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	address: {
		type: String,
		required: [true, "Wallet address required"],
	},
	posts: {
		type: [mongoose.Schema.ObjectId],
		ref: "Post",
	},
	username: {
		type: String,
		required: [true, "Username required"],
		maxlength: [50, "Username can not be more than 50 characters"],
	},
	bio: {
		type: String,
		required: [true, "Bio required"],
		maxlength: [200, "Bio can not be more than 200 characters"],
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
});

UserSchema.pre("save", function () {
	nonce = Math.floor(Math.random() * 1000000).toString();
});

module.exports = mongoose.model("User", UserSchema);
