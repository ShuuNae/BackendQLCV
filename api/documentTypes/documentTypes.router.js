const router = require("express").Router();
const {
  createDocumentType,
  getDocumentTypes,
  getDocumentTypesByID,
  updateDocumentType,
  deleteDocumentType
} = require("./documentTypes.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createDocumentType);
router.get("/", checkTokens, getDocumentTypes);
router.get("/:maLVB", checkTokens, getDocumentTypesByID);
router.patch("/", checkTokens, updateDocumentType);
router.delete("/", checkTokens, deleteDocumentType);

module.exports = router;
