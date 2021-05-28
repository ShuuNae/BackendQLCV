const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into phongban(tenphong, ghichu, trangthai, maCQ) value(?,?,?,?)",
      [data.tenphong, data.ghichu, data.trangthai, data.maCQ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDepartments: (callBack) => {
    pool.query(
      "select maPB, tenphong, ghichu, trangthai, maCQ from phongban ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDepartmentByID: (id, callBack) => {
    pool.query(
      "select maPB, tenphong, ghichu, trangthai, maCQ from phongban where maPB=? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateDepartment: (data, callBack) => {
    pool.query(
      "update phongban set tenphong=?, ghichu=?, trangthai=?,maCQ=? where maPB=? ",
      [data.tenphong, data.ghichu, data.trangthai, data.maCQ, data.maPB],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteDepartment: (data, callBack) => {
    pool.query(
      "delete from phongban where maPB=?",
      [data.maPB],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
