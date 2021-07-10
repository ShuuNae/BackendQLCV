const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into congvannoibo(tenvb, sohieu, kyhieu, ngayky, ngayluu, maLVB, maND, noidung, tailieu, tentailieu, pbnhan, tinhtrangduyet, maBM) value(?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        data.tenvb,
        data.sohieu,
        data.kyhieu,
        data.ngayky,
        data.ngayluu,
        data.maLVB,
        data.maND,
        data.noidung,
        data.tailieu,
        data.tentailieu,
        data.pbnhan,
        data.tinhtrangduyet,
        data.maBM,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getInternals: (callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayluu, maLVB, maND, noidung, tailieu, tentailieu, pbnhan, tinhtrangduyet, maBM from congvannoibo ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getInternalsPagination: (offset, callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayluu, maLVB, maND, noidung, tailieu, tentailieu, pbnhan, tinhtrangduyet, maBM from congvannoibo limit 20 offset ? ",
      [offset],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getInternalByID: (id, callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayluu, d.maLVB, l.tenlvb, d.maND, n.hoten, noidung, tailieu, tentailieu, pbnhan, tinhtrangduyet, d.maBM, b.tenBM from congvannoibo d inner join nguoidung n on d.maND = n.maND inner join loaivanban l on d.maLVB = l.maLVB inner join bieumau b on d.maBM = b.maBM where maVB =? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getInternalCount: (callBack) => {
    pool.query(
      "select count(*) as tong from congvannoibo",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  searchInternal: (data, offset, callBack) => {
    newData = "%" + data + "%";
    data = newData;
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayluu, maLVB, maND, noidung, tailieu, tentailieu, pbnhan, tinhtrangduyet, maBM from congvannoibo where tenvb like N? or sohieu like N? or kyhieu like N? or ngayky like N? or ngayluu like N? or tinhtrangduyet like N?",
      [data, data, data, data, data, data],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateInternal: (data, callBack) => {
    pool.query(
      "update congvannoibo set tenvb=?, sohieu=?, kyhieu=?, ngayky=?, ngayluu=?, maLVB=?, maND=?, noidung=?, tailieu=?, tentailieu=?, pbnhan=?, tinhtrangduyet=?, maBM=? where maVB=? ",
      [
        data.tenvb,
        data.sohieu,
        data.kyhieu,
        data.ngayky,
        data.ngayluu,
        data.maLVB,
        data.maND,
        data.noidung,
        data.tailieu,
        data.tentailieu,
        data.pbnhan,
        data.tinhtrangduyet,
        data.maBM,
        data.maVB,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteInternal: (data, callBack) => {
    pool.query(
      "delete from congvannoibo where maVB=?",
      [data.maVB],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
