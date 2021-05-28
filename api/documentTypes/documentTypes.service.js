const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into loaivanban(tenlvb, ghichu, trangthai) value(?,?,?)",
      [data.tenlvb, data.ghichu, data.trangthai],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDocumentTypes: (callBack) => {
    pool.query(
      "select maLVB, tenlvb, ghichu, trangthai from loaivanban ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDocumentTypesByID: (id, callBack) => {
    pool.query(
      "select maLVB, tenlvb, ghichu, trangthai from loaivanban where maLVB=? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateDocumentType: (data, callBack) => {
    pool.query(
      "update loaivanban set tenlvb=?, ghichu=?, trangthai=? where maLVB=? ",
      [data.tenlvb, data.ghichu, data.trangthai, data.maLVB],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteDocumentType: (data, callBack) => {
    pool.query(
      "delete from loaivanban where maLVB=?",
      [data.maLVB],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
