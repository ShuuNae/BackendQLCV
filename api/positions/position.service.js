const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into chucvu(tencv, ghichu, trangthai,quyenduyet) value(?,?,?,?)",
      [data.tencv, data.ghichu, data.trangthai, data.quyenduyet],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPositions: (callBack) => {
    pool.query(
      "select maCV, tencv, ghichu, trangthai, quyenduyet from chucvu ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPositionByID: (id, callBack) => {
    pool.query(
      "select maCV, tencv, ghichu, trangthai, quyenduyet from chucvu where macv=? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updatePosition: (data, callBack) => {
    pool.query(
      "update chucvu set tencv=?, ghichu=?, trangthai=?, quyenduyet=? where maCV=? ",
      [data.tencv, data.ghichu, data.trangthai, data.quyenduyet, data.maCV],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deletePosition: (data, callBack) => {
    pool.query(
      "delete from chucvu where maCV=?",
      [data.maCV],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
