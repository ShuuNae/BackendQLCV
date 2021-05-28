const router = require("express").Router();
const {
  createForm,
  getForms,
  getFormByID,
  updateForm,
  deleteForm,
} = require("./forms.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createForm);
router.get("/", checkTokens, getForms);
router.get("/:maBM", checkTokens, getFormByID);
router.patch("/", checkTokens, updateForm);
router.delete("/", checkTokens, deleteForm);

module.exports = router;
