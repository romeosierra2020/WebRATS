import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3500;

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/Hi", function (req, res) {
  // TODO Read Available Shows
  res.send("Hi");
});

app.get("*", function (req, res) {
  // TODO Read Available Shows
  res.render("./index");
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
