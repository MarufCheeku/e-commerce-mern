const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("API running .....");
});

app.get("/api/products", (req, res) => {
	res.send("Ye hai data");
});

app.get("/api/products/:id", (req, res) => {
	res.send("API running .....");
});

app.listen(5000, console.log("Server running on port 5000"));
