const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
//using this function we do not need to declare the path of every file, icon or css we are using
app.use(express.static('./public'))

// app.get("/", (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, './index.html'))
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
