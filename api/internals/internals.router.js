const router = require("express").Router();
const {
  createInternal,
  getInternals,
  getInternalByID,
  updateInternal,
  deleteInternal,
  getSignedURL,
  getDownloadUrl,
  getInternalCount,
} = require("./internals.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createInternal);
router.get("/", checkTokens, getInternals);
router.get("/getSignedUrl", checkTokens, getSignedURL);
router.get("/getDownloadUrl", checkTokens, getDownloadUrl);
router.get("/:maVB", checkTokens, getInternalByID);
router.get("/getCount", checkTokens, getInternalCount);
router.patch("/", checkTokens, updateInternal);
router.delete("/", checkTokens, deleteInternal);
module.exports = router;
