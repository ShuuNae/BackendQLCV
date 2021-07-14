const {
  createUser,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
  login,
} = require("./user.controller");
const router = require("express").Router();
const { checkTokens, checkData } = require("../../auth/token_validation");

router.post("/", checkTokens, createUser);
router.get("/", checkTokens, getUsers);
router.get("/checkToken", checkData);
router.get("/:maND", checkTokens, getUserByID);
router.patch("/", checkTokens, updateUser);
router.patch("/changePassword", checkTokens, updatePassword);
router.delete("/", checkTokens, deleteUser);
router.post("/login", login);

module.exports = router;
