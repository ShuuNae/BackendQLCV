const {
  create,
  getInternals,
  getInternalByID,
  updateInternal,
  deleteInternal,
} = require("./internals.service");

module.exports = {
  createInternal: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create internal: " + err);
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
  getInternals: (req, res) => {
    getInternals((err, result) => {
      if (err) {
        console.log("error getInternals: " + err);
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
  getInternalByID: (req, res) => {
    const id = req.params.maVB;
    getInternalByID(id, (err, result) => {
      if (err) {
        console.log("error getInternalByID: " + err);
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
  updateInternal: (req, res) => {
    const body = req.body;
    updateInternal(body, (err, results) => {
      if (err) {
        console.log("error update internal: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update internal",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteInternal: (req, res) => {
    const data = req.body;
    deleteInternal(data, (err, result) => {
      if (err) {
        console.log("error delete Internal: " + err);
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
        message: "Internal deleted successfully",
      });
    });
  },
};
