// getLoggedinUser, getAddressUser, loginUser

const UserModel = require("../models/user.model");
const asyncHandler = require("../middlewares/async");

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

const loginUser = (req, res, next) => {
	/*
		client json in body: 
		{
			username,
			bio,
			address (web3.eth.coinbase)
		}

		send nonce
		get signed nonce
		verify on server
		if verified, send cookie
	*/
	return res.status(200).json({ status: "ok", data: {} });
};

module.exports = {
	getLoggedinUser,
	getAddressUser,
	loginUser,
	getNonce,
};
