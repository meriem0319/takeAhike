const { Trail } = require("../../models");
const router = require("express").Router();
const { withAuth } = require("../../utils");

router.post("/", withAuth, async (req, res) => {
  const { trailName, city, image, description } = req.body;
  const UserId = req.session.userId;

  try {
    const newTrail = await Trail.create({
      trailName,
      city,
      image,
      description,
      userId,
    });

    res.json(newTrail);
  } catch (error) {
    console.log("something is wrong", error);
    return res.status(500).json({ message: "Something is not right " });
  }
});

router.get("/", withAuth, async (req, res) => {
  const UserId = req.session.userId;

  try {
    const dbTrails = await Trail.findAll({
      where: {
        UserId,
      },
    });
    dbTrails.map((trail) => trail.get({ plain: true }));
    res.status(200).json(dbTrails);
  } catch (error) {
    console.log("something is wrong", error);
    return res.status(500).json({ message: "something isnt right" });
  }
});

module.exports = router;
