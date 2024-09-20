const express = require("express");
const app = express();
const mongodb = require("./connection.js");
const path = require("path");

const indexRouter = require("./route/IndexRoute.js");
const port = 3000;
const userRouter = require("./route/userRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//public path
app.use(express.static(path.join(__dirname, "public")));
//ejs
app.set("view engine", "ejs");

// Connect MongoDB at default port 27017.
mongodb();

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
