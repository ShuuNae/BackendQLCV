const router = require("express").Router();
const {
  createInternal,
  getInternals,
  getInternalByID,
  updateInternal,
  deleteInternal,
} = require("./internals.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createInternal);
router.get("/", checkTokens, getInternals);
router.get("/:maVB", checkTokens, getInternalByID);
router.patch("/", checkTokens, updateInternal);
router.delete("/", checkTokens, deleteInternal);
module.exports = router;
