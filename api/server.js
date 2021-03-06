const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config/.env" });
connectDB();

const feedRoute = require("./routes/feed.route");
const postRoute = require("./routes/post.route");
const userRoute = require("./routes/user.route");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Dev logging middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
app.use(cookieParser());

// route handlers
app.use("/api/feed", feedRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use(errorHandler);

// listening
const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
	)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);

	// close server & exit process
	server.close(() => process.exit(1));
});
