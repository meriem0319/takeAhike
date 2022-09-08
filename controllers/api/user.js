const { User } = require("../../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    return res.json({ message: "we are in!" });
  } else {
    return res.json({ message: "we are NOT in!" });
  }
});

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  if ((!username, !email, !password)) {
    return res.status(400).json({ message: "not all info was provided" });
  }
  try {
    const newUser = await User.create({
      username,
      email,
      password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id;
      return res.status(201).json(newUser);
    });
  } catch (error) {
    console.log("something isnt okay", error);
    return res.status(500).json({ message: "all info wasnt provided" });
  }

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    const isValidPassword = user.checkPassword(password);

    if (isValidPassword) {
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = user.id;
        return res.status(200).json(user);
      });
    } else {
      res.status(404).json({ message: "you entered something wrong" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something is wrong" });
  }
});

router.post("/logout", async (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
