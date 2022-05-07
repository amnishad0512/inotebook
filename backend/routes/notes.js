const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ bam: "2" });
});

module.exports = router;
