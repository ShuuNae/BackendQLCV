const router = require("express").Router();
const {
  createOrganization,
  getOrganizations,
  getOrganizationByID,
  updateOrganization,
  deleteOrganization
} = require("./organization.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createOrganization);
router.get("/", checkTokens, getOrganizations);
router.get("/:maCQ", checkTokens, getOrganizationByID);
router.patch("/", checkTokens, updateOrganization);
router.delete("/", checkTokens, deleteOrganization);
module.exports = router;
