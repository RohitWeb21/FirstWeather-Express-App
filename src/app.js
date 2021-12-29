// const requests=require("requests")
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partialsPath);


// routing start
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/*", (req, res) => {
  res.render("404err");
});

// server listen
app.listen(port, (err) => {
  if (err) throw err;
  console.log("server is created");
});
