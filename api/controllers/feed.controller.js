// getFeed

const getFeed = (req, res, next) => {
	return res.status(200).json({ status: "ok", data: {} });
};

module.exports = {
	getFeed,
};
