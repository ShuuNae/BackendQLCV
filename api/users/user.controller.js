const {
  create,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
  getUserByAccount,
  updatePassword,
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.matkhau = hashSync(body.matkhau, salt);
    create(body, (err, results) => {
      if (err) {
        console.log("error create user: " + err);
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
  getUserByID: (req, res) => {
    const id = req.params.maND;
    getUserByID(id, (err, result) => {
      if (err) {
        console.log("error getUserByID: " + err);
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
  getUsers: (req, res) => {
    getUsers((err, result) => {
      if (err) {
        console.log("error getUser: " + err);
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
  updateUser: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10);
    // body.matkhau = hashSync(body.matkhau, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log("error update user: " + err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update user",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, result) => {
      if (err) {
        console.log("error delete user: " + err);
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
        message: "user deleted successfully",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByAccount(body.taikhoan, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          error: err,
        });
      }
      if (!results) {
        return res.status(400).json({
          success: 0,
          message: "Invalid user or password",
        });
      }
      const result = compareSync(body.matkhau, results.matkhau);
      if (result) {
        results.matkhau = undefined;
        const jsonwebtoken = sign({ result: results }, process.env.JWT_TOKEN);
        return res.status(200).json({
          success: 1,
          message: "login successfully",
          token: jsonwebtoken,
        });
      } else {
        return res.status(400).json({
          success: 0,
          message: "Invalid user or password",
        });
      }
    });
  },
  updatePassword: (req, res) => {
    const body = req.body;
    getUserByAccount(body.taikhoan, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          error: err,
        });
      }
      if (!results) {
        return res.status(400).json({
          success: 0,
          message: "Invalid user or password asd",
        });
      }
      const result = compareSync(body.matkhau, results.matkhau);
      if (result) {
        const salt = genSaltSync(10);
        body.matkhaumoi = hashSync(body.matkhaumoi, salt);
        updatePassword(body, (err, results) => {
          if (err) {
            console.log("error create user: " + err);
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
      } else {
        return res.status(400).json({
          success: 0,
          message: "Invalid user or password",
        });
      }
    });
  },
};
