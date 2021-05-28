const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into duyetcongvan(maCVDen, maCVDi, maCVNB, maND, thoigianduyet) value(?,?,?,?,?)",
      [data.maCVDen, data.maCVDi, data.maCVNB, data.maND, data.thoigianduyet],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getApproves: (callBack) => {
    pool.query("select * from duyetcongvan ", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getApproveByID: (id, callBack) => {
    pool.query(
      "select * from duyetcongvan where id=? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateApprove: (data, callBack) => {
    pool.query(
      "update duyetcongvan set maCVDen=?, maCVDi=?, maCVNB=?,maND=?,thoigianduyet=? where id=? ",
      [
        data.maCVDen,
        data.maCVDi,
        data.maCVNB,
        data.maND,
        data.thoigianduyet,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteApprove: (data, callBack) => {
    pool.query(
      "delete from duyetcongvan where id=?",
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
