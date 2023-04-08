const express = require("express");
require("express-async-errors");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
require("dotenv").config();
require("./db/connect");
const cors = require("cors");
const { authRouter } = require("./routes/authRoutes");
const authorizationMiddleware = require("./middleware/auth");
const { watchlistRouter } = require("./routes/watchlistRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/watchlist", authorizationMiddleware, watchlistRouter);

//middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log("Server started on port:", port);
});
