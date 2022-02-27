const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
	let error = { ...err };
	error.message = err.message;

	// add errors
	// CastError, Duplicate, validation

	// mongoose bad object id
	if (err.name === "CastError") {
		const message = `Resource not found with the id ${err.value}`;
		error = new ErrorResponse(message, 404);
	}

	// mongoose duplicate field error
	if (err.code === 11000) {
		const message = `Duplicate value entered`;
		error = new ErrorResponse(message, 409);
	}

	// mongoose validation error
	if (err.name === "ValidationError") {
		const message = Object.values(err.errors).map((val) => val.message);
		error = new ErrorResponse(message, 409);
	}

	res.status(error.statusCode || 500).json({
		status: "error",
		error: error.message || "Server error",
	});
};

module.exports = errorHandler;
