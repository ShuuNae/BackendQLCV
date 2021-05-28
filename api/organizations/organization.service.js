const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into coquan(tencq, diachi, dienthoai, fax, email) value(?,?,?,?,?)",
      [data.tencq, data.diachi, data.dienthoai, data.fax, data.email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrganizations: (callBack) => {
    pool.query(
      "select maCQ, tencq, diachi, dienthoai, fax, email from coquan ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getOrganizationByID: (id, callBack) => {
    pool.query(
      "select maCQ, tencq, diachi, dienthoai, fax, email from coquan where maCQ=? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateOrganization: (data, callBack) => {
    pool.query(
      "update coquan set tencq=?, diachi=?, dienthoai=?,fax=?, email=? where maCQ=? ",
      [
        data.tencq,
        data.diachi,
        data.dienthoai,
        data.fax,
        data.email,
        data.maCQ,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteOrganization: (data, callBack) => {
    pool.query(
      "delete from coquan where maCQ=?",
      [data.maCQ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
