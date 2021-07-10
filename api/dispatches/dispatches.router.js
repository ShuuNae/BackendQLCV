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
  getDispatchCount,
  searchDispatch,
} = require("./dispatches.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createDispatch);
router.get("/", checkTokens, getDispatches);
router.get("/getCount", checkTokens, getDispatchCount);
router.get("/getSignedUrl", checkTokens, getSignedURL);
router.get("/getDownloadUrl", checkTokens, getDownloadUrl);
router.get("/pagination", checkTokens, getDispatchesPagination);
router.get("/search", checkTokens, searchDispatch);
router.get("/:maVB", checkTokens, getDispatchByID);
router.patch("/", checkTokens, updateDispatch);
router.delete("/", checkTokens, deleteDispatch);
module.exports = router;
