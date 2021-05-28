const {
  create,
  getPositions,
  getPositionByID,
  updatePosition,
  deletePosition,
} = require("./position.service");

module.exports = {
  createPosition: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create position: " + err);
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
  getPositions: (req, res) => {
    getPositions((err, result) => {
      if (err) {
        console.log("error getPositions: " + err);
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
  getPositionByID: (req, res) => {
    const id = req.params.maCV;
    getPositionByID(id, (err, result) => {
      if (err) {
        console.log("error getOrganizationByID: " + err);
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
  updatePosition: (req, res) => {
    const body = req.body;
    updatePosition(body, (err, results) => {
      if (err) {
        console.log("error update position: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update position",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deletePosition: (req, res) => {
    const data = req.body;
    deletePosition(data, (err, result) => {
      if (err) {
        console.log("error delete Position: " + err);
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
        message: "Position deleted successfully",
      });
    });
  },
};
