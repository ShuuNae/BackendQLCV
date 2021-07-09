const router = require("express").Router();
const {
  createDispatch,
  getDispatches,
  getDispatchByID,
  updateDispatch,
  deleteDispatch,
  getSignedURL,
  getDownloadUrl,
  getDispatchesPagination,
} = require("./dispatches.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createDispatch);
router.get("/", checkTokens, getDispatches);
router.get("/getSignedUrl", checkTokens, getSignedURL);
router.get("/getDownloadUrl", checkTokens, getDownloadUrl);
router.get("/pagination", checkTokens, getDispatchesPagination);
router.get("/:maVB", checkTokens, getDispatchByID);
router.patch("/", checkTokens, updateDispatch);
router.delete("/", checkTokens, deleteDispatch);
module.exports = router;
