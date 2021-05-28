const router = require("express").Router();
const {
  createApprove,
  getApproves,
  getApproveByID,
  updateApprove,
  deleteApprove,
} = require("./approve.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createApprove);
router.get("/", checkTokens, getApproves);
router.get("/:id", checkTokens, getApproveByID);
router.patch("/", checkTokens, updateApprove);
router.delete("/", checkTokens, deleteApprove);
module.exports = router;
