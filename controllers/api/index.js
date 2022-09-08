const router = require("express").Router();
const userRoutes = require("./user");
const trailRoutes = require("./trail");

router.use("/user", userRoutes);
router.use("/trail", trailRoutes);

module.exports = router;
