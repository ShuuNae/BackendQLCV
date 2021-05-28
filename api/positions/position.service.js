const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into chucvu(tencv, ghichu, trangthai) value(?,?,?)",
      [data.tencv, data.ghichu, data.trangthai],
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
      "select maCV, tencv, ghichu, trangthai from chucvu ",
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
      "select maCV, tencv, ghichu, trangthai from chucvu where macv=? ",
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
      "update chucvu set tencv=?, ghichu=?, trangthai=? where maCV=? ",
      [data.tencv, data.ghichu, data.trangthai, data.maCV],
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
