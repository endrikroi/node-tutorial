const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware ==> res
app.use([logger, authorize]);

// app.use("/api", logger);
// if we add a path as above, the logger middleware will only work for the paths starting with "/api"

app.get("/", (req, res) => {
  res.send("Home Sabinaaaaaaa");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/api/products", (req, res) => {
  res.send("Products page");
});

app.get("/api/items", (req, res) => {
  res.send("Items page");
});

app.listen(5000, () => {
  console.log("Server is listening to port 5000...");
});
