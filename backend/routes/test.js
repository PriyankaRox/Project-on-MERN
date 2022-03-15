const router = require("express").Router();
const { appendJson, readJson } = require("../helper/files");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send({ success: 1, test: 1 });
});

router.post("/", (req, res) => {
  res.send({ success: 1, test: 1 });
});

router.get("/check", async (req, res) => {
  try {
    const users = await User.find({});
    res.send({ success: 1, data: users });
    
  } catch (err) {
    res.send({ err: err });
  }
});

router.post("/check", async (req, res) => {
  try {
    if (req.body) {
      const timeNow = Math.floor(+new Date() / 1000);
      const newData = { ...req.body, id: timeNow };
      const status = await appendJson("data.json", newData);
      res.send({ success: 1, msg: status });
    }
    //db connection
    const { name, age } = req.body;
    if (!name || !age) {
      //to check user dint left any empty
      return res.status(422).json({ error: "plz fill the field properly" });
    }
    const newData = new User({
      name,
      age,
    });
    await newData.save();
    return res.status(201).json({ message: "User reg success" });
  } catch (err) {
    res.send({ err: err });
  }
});

module.exports = router;
