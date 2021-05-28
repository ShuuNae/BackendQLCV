const {
  create,
  getDispatches,
  getDispatchByID,
  updateDispatch,
  deleteDispatch,
} = require("./dispatches.service");

module.exports = {
  createDispatch: (req, res) => {
    console.log(req);
    const body = req.body;
    const file = req.files.file;
    const fileDirectory = process.cwd();
    if (file) {
      file.mv(`${fileDirectory}/files/dispatches/${file.name}`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
      });
      body.tailieu = `/files/dispatches/${file.name}`;
    }
    create(body, (err, results) => {
      if (err) {
        console.log("error create dispatch: " + err);
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
  getDispatches: (req, res) => {
    getDispatches((err, result) => {
      if (err) {
        console.log("error getDispatches: " + err);
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
  getDispatchByID: (req, res) => {
    const id = req.params.maVB;
    getDispatchByID(id, (err, result) => {
      if (err) {
        console.log("error getDispatchByID: " + err);
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
  updateDispatch: (req, res) => {
    const body = req.body;
    const file = req.files.file;
    const fileDirectory = process.cwd();
    if (file) {
      file.mv(`${fileDirectory}/files/dispatches/${file.name}`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
      });
      body.tailieu = `/files/dispatches/${file.name}`;
    }
    updateDispatch(body, (err, results) => {
      if (err) {
        console.log("error update dispatch: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update dispatch",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteDispatch: (req, res) => {
    const data = req.body;
    deleteDispatch(data, (err, result) => {
      if (err) {
        console.log("error delete Dispatch: " + err);
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
        message: "Dispatch deleted successfully",
      });
    });
  },
};
