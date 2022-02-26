// getLoggedinUser, getAddressUser, loginUser

const getLoggedinUser = (req, res, next) => {
	return res.status(200).json({ status: "ok", data: {} });
};

const getAddressUser = (req, res, next) => {
	return res.status(200).json({ status: "ok", data: {} });
};

const loginUser = (req, res, next) => {
	return res.status(200).json({ status: "ok", data: {} });
};

module.exports = {
	getLoggedinUser,
	getAddressUser,
	loginUser,
};
