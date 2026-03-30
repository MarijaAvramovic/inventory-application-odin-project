require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

 

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));


 

app.get("/", (req, res) => {
  res.send("index");
});



const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});