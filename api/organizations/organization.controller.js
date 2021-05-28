const {
  create,
  getOrganizations,
  getOrganizationByID,
  updateOrganization,
  deleteOrganization,
} = require("./organization.service");

module.exports = {
  createOrganization: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create organization: " + err);
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
  getOrganizations: (req, res) => {
    getOrganizations((err, result) => {
      if (err) {
        console.log("error getOrganizations: " + err);
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
  getOrganizationByID: (req, res) => {
    const id = req.params.maCQ;
    getOrganizationByID(id, (err, result) => {
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
  updateOrganization: (req, res) => {
    const body = req.body;
    updateOrganization(body, (err, results) => {
      if (err) {
        console.log("error update organization: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update organization",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteOrganization: (req, res) => {
    const data = req.body;
    deleteOrganization(data, (err, result) => {
      if (err) {
        console.log("error delete Organization: " + err);
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
        message: "Organization deleted successfully",
      });
    });
  },
};
