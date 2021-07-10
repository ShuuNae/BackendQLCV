const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into congvanden(tenvb, sohieu, kyhieu, ngayky, ngayden, maLVB, maCQ, noigui, mucdokhan, mucdomat, maND, noidung, tailieu, tentailieu, duongden, tennvden, hanxuly, noidungxuly, phongbanxuly, tinhtrangduyet, maBM) value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        data.tenvb,
        data.sohieu,
        data.kyhieu,
        data.ngayky,
        data.ngayden,
        data.maLVB,
        data.maCQ,
        data.noigui,
        data.mucdokhan,
        data.mucdomat,
        data.maND,
        data.noidung,
        data.tailieu,
        data.tentailieu,
        data.duongden,
        data.tennvden,
        data.hanxuly,
        data.noidungxuly,
        data.phongbanxuly,
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
  getArrives: (callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayden, maLVB, maCQ, noigui, mucdokhan, mucdomat, maND, noidung, tailieu,tentailieu, duongden, tennvden, hanxuly, noidungxuly, phongbanxuly, tinhtrangduyet, maBM from congvanden ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getArrivesPagination: (offset, callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayden, maLVB, maCQ, noigui, mucdokhan, mucdomat, maND, noidung, tailieu,tentailieu, duongden, tennvden, hanxuly, noidungxuly, phongbanxuly, tinhtrangduyet, maBM from congvanden limit 20 offset ? ",
      [offset],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  searchArrives: (data, offset, callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayden, maLVB, maCQ, noigui, mucdokhan, mucdomat, maND, noidung, tailieu,tentailieu, duongden, tennvden, hanxuly, noidungxuly, phongbanxuly, tinhtrangduyet, maBM from congvanden where tenvb like '%?%' or sohieu like '%?%' or kyhieu like '%?%' or ngayky like '%?%' or ngayden like '%?%' or noigui like '%?%' or tinhtrangduyet like '%?%'  limit 20 offset ? ",
      [data, data, data, data, data, data, data, offset],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getArriveByID: (id, callBack) => {
    pool.query(
      "select maVB, tenvb, sohieu, kyhieu, ngayky, ngayden, d.maLVB, l.tenlvb, maCQ, noigui, mucdokhan, mucdomat, d.maND,n.hoten, noidung, tailieu,tentailieu, duongden, tennvden, hanxuly, noidungxuly, phongbanxuly, tinhtrangduyet, d.maBM, b.tenBM FROM congvanden d inner join nguoidung n on d.maND = n.maND inner join loaivanban l on d.maLVB = l.maLVB inner join bieumau b on d.maBM = b.maBM where maVB =? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getArriveCount: (callBack) => {
    pool.query(
      "select count(*) as tong from congvanden",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateArrive: (data, callBack) => {
    pool.query(
      "update congvanden set tenvb=?, sohieu=?, kyhieu=?, ngayky=?, ngayden=?, maLVB=?, maCQ=?, noigui=?, mucdokhan=?, mucdomat=?, maND=?, noidung=?, tailieu=?, tentailieu=?, duongden=?, tennvden=?, hanxuly=?,noidungxuly=?,phongbanxuly=?, tinhtrangduyet=?, maBM=? where maVB=? ",
      [
        data.tenvb,
        data.sohieu,
        data.kyhieu,
        data.ngayky,
        data.ngayden,
        data.maLVB,
        data.maCQ,
        data.noigui,
        data.mucdokhan,
        data.mucdomat,
        data.maND,
        data.noidung,
        data.tailieu,
        data.tentailieu,
        data.duongden,
        data.tennvden,
        data.hanxuly,
        data.noidungxuly,
        data.phongbanxuly,
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
  deleteArrive: (data, callBack) => {
    pool.query(
      "delete from congvanden where maVB=?",
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
