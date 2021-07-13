const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into congvandi(tenvb, sohieu, kyhieu, ngayky, ngaydi, maLVB, mucdokhan, mucdomat, maND, noidung, tailieu, tentailieu, duongdi, tennv, cqnhan, tinhtrangduyet, maBM) value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
        data.tentailieu,
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
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngaydi, maLVB, mucdokhan, mucdomat, maND, noidung, tailieu, tentailieu, duongdi, tennv, cqnhan, tinhtrangduyet, maBM from congvandi ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDispatchesPagination: (offset, callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngaydi, maLVB, mucdokhan, mucdomat, maND, noidung, tailieu, tentailieu, duongdi, tennv, cqnhan, tinhtrangduyet, maBM from congvandi limit 20 offset ? ",
      [offset],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDispatchCount: (callBack) => {
    pool.query(
      "select count(*) as tong from congvandi",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  searchDispatch: (data, offset, callBack) => {
    newData = "%" + data + "%";
    data = newData;
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngaydi, maLVB, mucdokhan, mucdomat, maND, noidung, tailieu, tentailieu, duongdi, tennv, cqnhan, tinhtrangduyet, maBM from congvandi where tenvb like N? or sohieu like N? or kyhieu like N? or ngayky like N? or ngaydi like N? or cqnhan like N? or tinhtrangduyet like N?",
      [data, data, data, data, data, data, data],
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
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngaydi, d.maLVB, l.tenlvb, mucdokhan, mucdomat, d.maND, n.hoten, n.maPB, noidung, tailieu, tentailieu, duongdi, tennv, cqnhan, tinhtrangduyet, d.maBM, b.tenBM from congvandi d inner join nguoidung n on d.maND = n.maND inner join loaivanban l on d.maLVB = l.maLVB inner join bieumau b on d.maBM = b.maBM where maVB =? ",
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
      "update congvandi set tenvb=?, sohieu=?, kyhieu=?, ngayky=?, ngaydi=?, maLVB=?, mucdokhan=?, mucdomat=?, maND=?, noidung=?, tailieu=?, tentailieu=?, duongdi=?, tennv=?, cqnhan=?, tinhtrangduyet=?, maBM=? where maVB=? ",
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
        data.tentailieu,
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
  approveDispatch: (data, callBack) => {
    pool.query(
      "update congvandi set tinhtrangduyet=? where maVB=?",
      [data.tinhtrangduyet, data.maVB],
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
