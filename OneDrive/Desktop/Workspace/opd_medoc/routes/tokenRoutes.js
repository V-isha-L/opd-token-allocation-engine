const express = require("express");
const router = express.Router();
const { allocateToken, cancelToken, noShow } = require("../services/allocationService");

let slots = [];

router.post("/token", (req, res) => {
  const { slot, patientName, type } = req.body;
  const result = allocateToken(slot, patientName, type);
  res.json({ message: result });
});

router.post("/cancel", (req, res) => {
  const { slot, patientName } = req.body;
  const result = cancelToken(slot, patientName);
  res.json({ message: result });
});

router.post("/noshow", (req, res) => {
  const { slot, patientName } = req.body;
  const result = noShow(slot, patientName);
  res.json({ message: result });
});

module.exports = router;
