const router = require("express").Router();
const {
  createArrive,
  getArrives,
  getArriveByID,
  updateArrive,
  deleteArrive,
  getSignedURL,
  getDownloadUrl,
  getArrivesPagination,
  getArriveCount,
  searchArrives,
  approveArrive,
} = require("./arrives.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createArrive);
router.get("/", checkTokens, getArrives);
router.get("/getCount", checkTokens, getArriveCount);
router.get("/getSignedUrl", checkTokens, getSignedURL);
router.get("/getDownloadUrl", checkTokens, getDownloadUrl);
router.get("/pagination", checkTokens, getArrivesPagination);
router.get("/search", checkTokens, searchArrives);
router.get("/:maVB", checkTokens, getArriveByID);
router.patch("/", checkTokens, updateArrive);
router.patch("/approve", checkTokens, approveArrive);
router.delete("/", checkTokens, deleteArrive);
module.exports = router;
