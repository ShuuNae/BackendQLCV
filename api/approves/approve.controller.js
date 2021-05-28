const {
  create,
  getApproves,
  getApproveByID,
  updateApprove,
  deleteApprove,
} = require("./approve.service");

module.exports = {
  createApprove: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create approve: " + err);
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
  getApproves: (req, res) => {
    getApproves((err, result) => {
      if (err) {
        console.log("error getApproves: " + err);
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
  getApproveByID: (req, res) => {
    const id = req.params.id;
    getApproveByID(id, (err, result) => {
      if (err) {
        console.log("error getApproveByID: " + err);
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
  updateApprove: (req, res) => {
    const body = req.body;
    updateApprove(body, (err, results) => {
      if (err) {
        console.log("error update approve: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update approve",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteApprove: (req, res) => {
    const data = req.body;
    deleteApprove(data, (err, result) => {
      if (err) {
        console.log("error delete Approve: " + err);
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
        message: "Approve deleted successfully",
      });
    });
  },
};
