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

const getLoggedinUser = asyncHandler(async (req, res, next) => {
	return res.status(200).json({ status: "ok", data: {} });
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
		return res.status(200).json({ status: "ok", data: { nonce: user.nonce } });
	}
});

const getAddressUser = asyncHandler(async (req, res, next) => {
	const address = req.params.address;
	const user = await UserModel.findOne({ address: address });
});

// REFERENCE: READ TO UNDERSTAND
// https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial
// https://cdn.discordapp.com/attachments/940221080747003978/947096050185961532/toptal-blog-image-1522395353253-70fb1c40e9527154c2774507b63eac63.png

const loginUser = asyncHandler(async (req, res, next) => {
	const address = req.params.address;
	const signature = req.body.signature;
	const existingNonce = await UserModel.findOne({ address }, "nonce");
	console.log(`savedNonce: ${existingNonce}`);

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
