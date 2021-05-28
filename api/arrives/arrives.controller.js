const {
  create,
  getArrives,
  getArriveByID,
  updateArrive,
  deleteArrive,
} = require("./arrives.service");

module.exports = {
  createArrive: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create arrive: " + err);
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
  getArrives: (req, res) => {
    getArrives((err, result) => {
      if (err) {
        console.log("error getArrives: " + err);
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
  getArriveByID: (req, res) => {
    const id = req.params.maVB;
    getArriveByID(id, (err, result) => {
      if (err) {
        console.log("error getArriveByID: " + err);
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
  updateArrive: (req, res) => {
    const body = req.body;
    updateArrive(body, (err, results) => {
      if (err) {
        console.log("error update arrive: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update arrive",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteArrive: (req, res) => {
    const data = req.body;
    deleteArrive(data, (err, result) => {
      if (err) {
        console.log("error delete Arrive: " + err);
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
        message: "Arrive deleted successfully",
      });
    });
  },
};
