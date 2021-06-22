import express from "express";
import router from "./router";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(router);

export default app;
