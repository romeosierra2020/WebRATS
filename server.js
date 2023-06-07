import express from "express";
import dotenv from "dotenv";
import ratsRouter from "./Router.js";
dotenv.config();
const PORT = process.env.PORT || 3500;

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(ratsRouter);



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
