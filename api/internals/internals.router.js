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
  getInternalsPagination,
} = require("./internals.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createInternal);
router.get("/", checkTokens, getInternals);
router.get("/getCount", checkTokens, getInternalCount);
router.get("/getSignedUrl", checkTokens, getSignedURL);
router.get("/getDownloadUrl", checkTokens, getDownloadUrl);
router.get("/pagination", checkTokens, getInternalsPagination);
router.get("/:maVB", checkTokens, getInternalByID);
router.patch("/", checkTokens, updateInternal);
router.delete("/", checkTokens, deleteInternal);
module.exports = router;
