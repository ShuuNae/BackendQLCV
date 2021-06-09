const router = require("express").Router();
const {
  createArrive,
  getArrives,
  getArriveByID,
  updateArrive,
  deleteArrive,
  getSignedURL,
  getDownloadUrl,
} = require("./arrives.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createArrive);
router.get("/", checkTokens, getArrives);
router.get("/getSignedUrl", checkTokens, getSignedURL);
router.get("/getDownloadUrl", checkTokens, getDownloadUrl);
router.get("/:maVB", checkTokens, getArriveByID);
router.patch("/", checkTokens, updateArrive);
router.delete("/", checkTokens, deleteArrive);
module.exports = router;
