const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const userinfo = async (req, res, next) => {
	const token = req.cookies.jwt;
	if (!token) {
		// return error
		return res.status(401).json({ status: "error", message: "Unauthorized" });
	}
	// verify jwt token and store user data in req.user
	jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
		if (err) {
			return res.status(401).json({ status: "error", message: "Unauthorized" });
		}
		// get user
		const user = await UserModel.findOne({ address: decodedToken.address });
		req.user = user;
	});
	next();
};

module.exports = userinfo;
