const {
  create,
  getDocumentTypes,
  getDocumentTypesByID,
  updateDocumentType,
  deleteDocumentType,
} = require("./documentTypes.service");

module.exports = {
  createDocumentType: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log("error create documentType: " + err);
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
  getDocumentTypes: (req, res) => {
    getDocumentTypes((err, result) => {
      if (err) {
        console.log("error getDocumentTypes: " + err);
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
  getDocumentTypesByID: (req, res) => {
    const id = req.params.maLVB;
    getDocumentTypesByID(id, (err, result) => {
      if (err) {
        console.log("error getDocumentTypesByID: " + err);
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
  updateDocumentType: (req, res) => {
    const body = req.body;
    updateDocumentType(body, (err, results) => {
      if (err) {
        console.log("error update documentType: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update documentType",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteDocumentType: (req, res) => {
    const data = req.body;
    deleteDocumentType(data, (err, result) => {
      if (err) {
        console.log("error delete documentType: " + err);
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
        message: "documentType deleted successfully",
      });
    });
  },
};
