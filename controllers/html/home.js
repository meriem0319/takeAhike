const router = require("express").Router();
const axios = require("axios");
const { Trail } = require("../../models");

router.get("/", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  console.log(loggedIn);

  res.render("home", {
    loggedIn,
  });
});

router.get("/profile", async (req, res) => {
  const UserId = req.session.userId;
  const loggedIn = req.session.loggedIn;

  try {
    const dbTrails = await Trail.findAll({
      where: {
        UserId,
      },
    });
    const trails = dbTrails.map((trail) => trail.get({ plain: true }));
    res.render("profile", {
      trails,
      loggedIn,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something is wrong" });
  }
});

router.get("/search/");
