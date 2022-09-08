const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("We in the user route");
  res.end();
});

module.exports = router;
