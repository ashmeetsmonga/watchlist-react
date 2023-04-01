const express = require("express");
require("express-async-errors");
require("dotenv").config();
require("./db/connect");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log("Server started on port:", port);
});
