const router = require("express").Router();
const {
  createDepartment,
  getDepartments,
  getDepartmentByID,
  updateDepartment,
  deleteDepartment
} = require("./department.controller");
const { checkTokens } = require("../../auth/token_validation");

router.post("/", checkTokens, createDepartment);
router.get("/", checkTokens, getDepartments);
router.get("/:maPB", checkTokens, getDepartmentByID);
router.patch("/", checkTokens, updateDepartment);
router.delete("/", checkTokens, deleteDepartment);
module.exports = router;
