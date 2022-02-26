const express = require("express");
const router = express.Router();

const {
	getLoggedinUser,
	getAddressUser,
	loginUser,
} = require("../controllers/user.controller");

router.route("/me").get(getLoggedinUser);
router.route("/login").post(loginUser);
router.route("/:address").get(getAddressUser);

module.exports = router;
