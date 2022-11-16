const router = require("express").Router();
const Order = require("../../models/Order")

router.get("/", (req, res) => {
  Order.find({}, function (err, docs) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).json(docs);
  });
});

router.get("/:Id", (req, res) => {
  res.send("id");
});

router.post("/", (req, res) => {
  res.send("post");
});

router.put("/", (req, res) => {
  res.send("put");
});

router.delete("/", (req, res) => {
  res.send("delete");
});

module.exports = router;
