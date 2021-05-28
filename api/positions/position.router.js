const router = require("express").Router();
const {
  createPosition,
  getPositions,
  getPositionByID,
  updatePosition,
  deletePosition,
} = require("./position.controller");

const { checkTokens } = require("../../auth/token_validation");
router.post("/", checkTokens, createPosition);
router.get("/", checkTokens, getPositions);
router.get("/:maCV", checkTokens, getPositionByID);
router.patch("/", checkTokens, updatePosition);
router.delete("/", checkTokens, deletePosition);
module.exports = router;
