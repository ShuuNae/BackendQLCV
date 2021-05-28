const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into bieumau(tenBM, soluong) value(?,?)",
      [data.tenBM, data.soluong],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getForms: (callBack) => {
    pool.query(
      "select maBM,tenBM, soluong from bieumau ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getFormByID: (id, callBack) => {
    pool.query(
      "select maBM,tenBM, soluong from bieumau where maBM=? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateForm: (data, callBack) => {
    pool.query(
      "update bieumau set tenBM=?, soluong=? where maBM=? ",
      [data.tenBM, data.soluong, data.maBM],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteForm: (data, callBack) => {
    pool.query(
      "delete from bieumau where maBM=?",
      [data.maBM],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
