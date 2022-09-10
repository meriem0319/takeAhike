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

//adding the url

router.get("/search/:city", async (req, res) => {
  const city = req.params.term;
  const loggedIn = req.session.loggedIn;
  console.log("we're logged in", loggedIn);

  if (!city || city === "...") {
    res.end();
  }

  const axiosResponse = await axios.get(
    `https://trailapi-trailapi.p.rapidapi.com/activity/q-${city}`
  );

  const trails = axiosResponse.data.items.map((item) => {
    return {
      trailId: item.place_id,
      trailName: item.name,
      city: item.city,
      directions: item.directions,
      description: item.description,
      image: item.activities.hiking.thumbnail,
      url: item.activities.hiking.url,
    };
  });
  res.render("results", {
    trails,
    loggedIn,
  });
});

router.get("/login", async (req, res) => {
  const loggedIn = req.session.loggedIn;

  res.render("login", {
    loggedIn,
  });
});

module.exports = router;
