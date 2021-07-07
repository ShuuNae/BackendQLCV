const {
  create,
  getInternals,
  getInternalByID,
  updateInternal,
  deleteInternal,
  getInternalCount,
} = require("./internals.service");

const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.REGION,
});

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

  getInternalCount: (req, res) => {
    getInternalCount((err, result) => {
      if (err) {
        console.log("error getInternalCount: " + err);
        return res.json({
          success: 0,
          error: err,
        });
      }
      if (!result) {
        return res.json({
          success: 0,
          message: "Record not found Count",
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

  getSignedURL: (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query.fileName;
    const fileType = req.query.fileType;
    const filePath = `internal/${fileName}`;
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
    const filePath = `internal/${fileName}`;
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
