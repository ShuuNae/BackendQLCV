const router = require("express").Router();
const { createDispatch, getDispatches, getDispatchByID,updateDispatch,deleteDispatch } = require("./dispatches.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createDispatch);
router.get("/", checkTokens, getDispatches);
router.get("/:maVB", checkTokens, getDispatchByID);
router.patch("/", checkTokens, updateDispatch);
router.delete("/", checkTokens, deleteDispatch);
module.exports = router;
