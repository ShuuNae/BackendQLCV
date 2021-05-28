const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into congvandi(tenvb, sohieu, kyhieu, ngayky, ngaydi, maLVB, mucdokhan, mucdomat, maND, noidung, tailieu, duongdi, tennv, cqnhan, tinhtrangduyet, maBM) value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        data.tenvb,
        data.sohieu,
        data.kyhieu,
        data.ngayky,
        data.ngaydi,
        data.maLVB,
        data.mucdokhan,
        data.mucdomat,
        data.maND,
        data.noidung,
        data.tailieu,
        data.duongdi,
        data.tennv,
        data.cqnhan,
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
  getDispatches: (callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngaydi, maLVB, mucdokhan, mucdomat, maND, noidung, tailieu, duongdi, tennv, cqnhan, tinhtrangduyet, maBM from congvandi ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDispatchByID: (id, callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngaydi, d.maLVB, l.tenlvb, mucdokhan, mucdomat, d.maND, n.hoten, noidung, tailieu, duongdi, tennv, cqnhan, tinhtrangduyet, d.maBM, b.tenBM from congvandi d inner join nguoidung n on d.maND = n.maND inner join loaivanban l on d.maLVB = l.maLVB inner join bieumau b on d.maBM = b.maBM where maVB =? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateDispatch: (data, callBack) => {
    pool.query(
      "update congvandi set tenvb=?, sohieu=?, kyhieu=?, ngayky=?, ngaydi=?, maLVB=?, mucdokhan=?, mucdomat=?, maND=?, noidung=?, tailieu=?, duongdi=?, tennv=?, cqnhan=?, tinhtrangduyet=?, maBM=? where maVB=? ",
      [
        data.tenvb,
        data.sohieu,
        data.kyhieu,
        data.ngayky,
        data.ngaydi,
        data.maLVB,
        data.mucdokhan,
        data.mucdomat,
        data.maND,
        data.noidung,
        data.tailieu,
        data.duongdi,
        data.tennv,
        data.cqnhan,
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
  deleteDispatch: (data, callBack) => {
    pool.query(
      "delete from congvandi where maVB=?",
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
