require("dotenv").config();
require("./config/db-connection");
require("./config/passport");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const app = express();
const cors = require("cors");

const corsOptions = { origin: process.env.FRONTEND_URL };
app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/test", (req, res) => {
  res.send("server online");
});

//authenticating route
const authRoute = require("./auth/auth");
app.use("/auth", authRoute);

//api routes

const userAPI = require("./api/user");
const articleAPI = require("./api/menu");
const alimentAPI = require("./api/aliment");
const commandAPI = require("./api/command");
app.use("/api/users", userAPI.router);
app.use("/api/menu", articleAPI.router);
app.use("/api/aliments", alimentAPI.router);
app.use("api/command", commandAPI.router);

app.listen(process.env.PORT, () => {
  console.log("App hosted on: ", process.env.SITE_URL);
});
