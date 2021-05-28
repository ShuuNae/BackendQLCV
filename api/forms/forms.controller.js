const {
  create,
  getForms,
  getFormByID,
  updateForm,
  deleteForm,
} = require("./forms.service");

module.exports = {
  createForm: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create Form: " + err);
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
  getForms: (req, res) => {
    getForms((err, result) => {
      if (err) {
        console.log("error getForms: " + err);
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
  getFormByID: (req, res) => {
    const id = req.params.maBM;
    getFormByID(id, (err, result) => {
      if (err) {
        console.log("error getFormByID: " + err);
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
  updateForm: (req, res) => {
    const body = req.body;
    updateForm(body, (err, results) => {
      if (err) {
        console.log("error update Form: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update Form",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteForm: (req, res) => {
    const data = req.body;
    deleteForm(data, (err, result) => {
      if (err) {
        console.log("error delete form: " + err);
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
        message: "form deleted successfully",
      });
    });
  },
};
