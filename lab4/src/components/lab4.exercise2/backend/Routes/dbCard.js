//API Endpoints
const Card = require("../Models/Card");
const router = require("express").Router();
router.get("/", async (req, res) => {
  const cards = await Card.find();
  try {
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/cards", async (req, res) => {
  const newCard = new Card(req.body);
  try {
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
