const {
  create,
  getDispatches,
  getDispatchByID,
  updateDispatch,
  deleteDispatch,
} = require("./dispatches.service");
const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.REGION,
});

module.exports = {
  createDispatch: (req, res) => {
    console.log(req);
    const body = req.body;
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
  getSignedURL: (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query.fileName;
    const fileType = req.query.fileType;
    const filePath = `dispatch/${fileName}`;
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: filePath,
      Expires: 60,
      ContentType: fileType,
      // ContentEncoding: "base64",
      // ACL: "public-read",
    };

    s3.getSignedUrl("putObject", params, (err, data) => {
      if (err) {
        console.log(`getSignedUrl error: `, err);
        return res.end();
      } else {
        res.write(JSON.stringify(data));
        res.end();
      }
    });
  },

  getDownloadUrl: (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query.fileName;
    const filePath = `dispatch/${fileName}`;
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: filePath,
      Expires: 60,
    };

    s3.getSignedUrl("getObject", params, (err, data) => {
      if (err) {
        console.log(`getDownloadSignedUrl error: `, err);
        return res.end();
      } else {
        res.write(JSON.stringify(data));
        res.end();
      }
    });
  },
};
