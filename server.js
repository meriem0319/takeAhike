const express = require("express");
// const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3008;
const sequelize = require("./config/connection");
const controllers = require("./controllers");
const { Trail, User } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("work work working");
});

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("It is working!"));
});
