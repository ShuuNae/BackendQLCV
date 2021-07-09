const {
  create,
  getArrives,
  getArriveByID,
  updateArrive,
  deleteArrive,
  getArrivesPagination,
} = require("./arrives.service");
const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.REGION,
});

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
  getArrivesPagination: (req, res) => {
    const page = req.query.page;
    const offset = page * 20;
    getArrivesPagination(offset, (err, result) => {
      if (err) {
        console.log("error getArrivesPagination: " + err);
        return res.json({
          success: 0,
          error: err,
        });
      }
      if (!result) {
        return res.json({
          success: 0,
          message: "Record not found getArrivesPagination",
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

  getSignedURL: (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query.fileName;
    const fileType = req.query.fileType;
    const filePath = `arrive/${fileName}`;
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
    const filePath = `arrive/${fileName}`;
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
