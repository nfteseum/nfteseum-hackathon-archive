const express = require("express");
const router = express.Router();

const {
	getLoggedinUser,
	getAddressUser,
	getNonce,
	loginUser,
} = require("../controllers/user.controller");

router.route("/me").get(getLoggedinUser);
router.route("/:address/login").post(loginUser);
router.route("/:address/nonce").get(getNonce);
router.route("/:address").get(getAddressUser);

module.exports = router;
