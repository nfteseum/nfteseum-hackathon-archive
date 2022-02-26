// getLoggedinUser, getAddressUser, loginUser

const UserModel = require("../models/user.model");
const asyncHandler = require("../middlewares/async");
const jwt = require("jsonwebtoken");
const { recoverPersonalSignature } = require("@metamask/eth-sig-util");

// 3 days
const expireTime = 3 * 24 * 60 * 60;
const createToken = (address) => {
	return jwt.sign({ address }, process.env.JWT_SECRET, {
		expiresIn: expireTime,
	});
};

const toHex = (stringToConvert) =>
	stringToConvert
		.split("")
		.map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
		.join("");

const getLoggedinUser = asyncHandler(async (req, res, next) => {
	const token = req.cookies.jwt;
	if (!token) {
		return res.status(400).json({
			status: "error",
			error: "No logged in user",
		});
	}

	jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
		if (err) {
			return res.status(400).json({ status: "error", error: "Invalid JWT" });
		}

		const address = decodedToken.address;
		const user = await UserModel.findOne({ address });
		return res.status(200).json({ status: "ok", data: user });
	});
});

const getNonce = asyncHandler(async (req, res, next) => {
	const address = req.params.address;
	const nonce = await UserModel.findOne({ address: address }, "nonce");
	if (nonce) {
		return res.status(200).json({ status: "ok", data: { nonce } });
	} else {
		const user = await UserModel.create({
			address,
		});
		const nonce = user.nonce;
		return res.status(200).json({ status: "ok", data: { nonce } });
	}
});

const getAddressUser = asyncHandler(async (req, res, next) => {
	const address = req.params.address;
	const user = await UserModel.findOne({ address: address });
	if (!user) {
		return res.status(400).json({
			status: "error",
			error: "Address does not exist",
		});
	}
	return res.status(200).json({ status: "ok", data: user });
});

// REFERENCE: READ TO UNDERSTAND
// https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial
// https://cdn.discordapp.com/attachments/940221080747003978/947096050185961532/toptal-blog-image-1522395353253-70fb1c40e9527154c2774507b63eac63.png

const loginUser = asyncHandler(async (req, res, next) => {
	const address = req.params.address;
	const signature = req.body.signature;
	const existinguser = await UserModel.findOne({ address });
	const existingNonce = existinguser.nonce;

	const recoveredAddress = recoverPersonalSignature({
		data: `0x${toHex(existingNonce)}`,
		signature: signature,
	});
	console.log(recoveredAddress);

	if (recoveredAddress === address) {
		// verified
		const username = req.body.username;
		const bio = req.body.bio;
		if (username && bio) {
			const user = await UserModel.updateOne({ address }, { username, bio });
			console.log(user);
		}

		const token = createToken(address);
		res.cookie("jwt", token, { httpOnly: true, maxAge: expireTime * 1000 });
		return res.status(200).json({ status: "ok" });
	} else {
		// not proven identity
		return res
			.status(400)
			.json({ status: "error", error: "Invalid signature" });
	}
});

module.exports = {
	getLoggedinUser,
	getAddressUser,
	loginUser,
	getNonce,
};
