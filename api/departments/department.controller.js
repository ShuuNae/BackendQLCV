const {
  create,
  getDepartments,
  getDepartmentByID,
  updateDepartment,
  deleteDepartment,
} = require("./department.service");

module.exports = {
  createDepartment: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create department: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getDepartments: (req, res) => {
    getDepartments((err, result) => {
      if (err) {
        console.log("error getDepartments: " + err);
        return res.json({
          success: 0,
          error: err,
        });
      }
      if (!result) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  getDepartmentByID: (req, res) => {
    const id = req.params.maPB;
    getDepartmentByID(id, (err, result) => {
      if (err) {
        console.log("error getDepartmentByID: " + err);
        return res.json({
          success: 0,
          error: err,
        });
      }
      if (!result) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  updateDepartment: (req, res) => {
    const body = req.body;
    updateDepartment(body, (err, results) => {
      if (err) {
        console.log("error update department: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update department",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteDepartment: (req, res) => {
    const data = req.body;
    deleteDepartment(data, (err, result) => {
      if (err) {
        console.log("error delete Department: " + err);
        return res.json({
          success: 0,
          error: err,
        });
      }
      if (!result) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "Department deleted successfully",
      });
    });
  },
};
