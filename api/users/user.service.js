const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into nguoidung(taikhoan, matkhau, hoten, namsinh, diachi, gioitinh, trangthailamviec, maPB, maCV, isAdmin) value(?,?,?,?,?,?,?,?,?,?)",
      [
        data.taikhoan,
        data.matkhau,
        data.hoten,
        data.namsinh,
        data.diachi,
        data.gioitinh,
        data.trangthailamviec,
        data.maPB,
        data.maCV,
        data.isAdmin,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      "select maND, taikhoan, hoten, namsinh, diachi, gioitinh, trangthailamviec, maPB, maCV, isAdmin from nguoidung ",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByID: (id, callBack) => {
    pool.query(
      "select maND, taikhoan, hoten, namsinh, diachi, gioitinh, trangthailamviec, n.maPB, p.tenphong, n.maCV, c.tencv, c.quyenduyet, isAdmin from nguoidung n inner join phongban p on n.maPB = p.maPB inner join chucvu c on n.maCV = c.maCV where maND=? ",
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      "update nguoidung set taikhoan=?, hoten=?, namsinh=?,diachi=?, gioitinh=?, trangthailamviec=?, maPB=?, maCV=?, isAdmin=? where maND=? ",
      [
        data.taikhoan,
        data.hoten,
        data.namsinh,
        data.diachi,
        data.gioitinh,
        data.trangthailamviec,
        data.maPB,
        data.maCV,
        data.isAdmin,
        data.maND,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatePassword: (data, callBack) => {
    pool.query(
      "update nguoidung set matkhau=? where maND=? ",
      [data.matkhaumoi],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      "delete from nguoidung where maND=?",
      [data.maND],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByAccount: (account, callBack) => {
    pool.query(
      "select maND, taikhoan, matkhau, hoten, namsinh, diachi, gioitinh, trangthailamviec, maPB, n.maCV, isAdmin, c.quyenduyet from nguoidung n inner join chucvu c on n.maCV = c.maCV where taikhoan=? and trangthailamviec=1;",
      [account],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
