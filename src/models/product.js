// 4

// Hampir sama dengan controller tapi bukan untuk mengirimkan data,
// Melainkan untuk mereturn data
// Dan tidak perlu menggunakan callback res/req seperti controller
// Model ini hanya berisi hal yang berhubungan dengan database

// Yang Berhubungan dengan database akan di panggil di model ini

const connection = require("../configs/db");

const products = {
  // return menggunakan promise, karena mengambil data dari database itu bisa lama dan prosesnya akan dibuat asynchronus

  // SHOW PRODUCT || GET PRODUCT BY NAME
  getAllProduct: (search, orderby, limit, page, sort) => {
    return new Promise((resolve, reject) => {
      // Disini Saya Membuat Percabangan
      // Dimana jika user tidak sedang mencari/ param search tidak dipakai, maka query yang akan di jalan kan yaitu select * from
      if (search) {
        connection.query(
          "SELECT * FROM product WHERE name LIKE ?",
          `%${search}%`,
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err.message(err));
            }
          }
        );
      } else if ((orderby, sort)) {
        // Tapi jika query diperlukan untuk mencari sesuatu, maka query ini yang dijalankan

        connection.query(
          // Kita bisa memilih ingin mengurutkan apa, dan metode pengurutan seperti apa yang kita inginkan, ascending kah descending kah
          `SELECT * FROM product ORDER BY ${orderby} ${sort}`,
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(
                err.message("The data you want to sort is not in the database")
              );
            }
          }
        );
      } else if (limit && page) {
        connection.query(
          `SELECT * FROM product LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err.mesage(err));
            }
          }
        );
      } else {
        //   lalu dipanggilah connection, dan di beri query perintah apa
        connection.query(
          "SELECT product.*, category.nameCategory FROM product INNER JOIN category ON product.idCategory = category.idCategory",
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          }
        );
      }
    });
  },

  // GET BY ID
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM product WHERE id = ?",
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(
              err.message(
                "id you are looking for does not exist or has been deleted"
              )
            );
          }
        }
      );
    });
  },

  // INSERT
  // unruk menghubungkan dari controller ke model melalui parameter data
  insertProduct: (data) => {
    return new Promise((resolve, reject) => {
      // kemudian data akan diolah atau masuk ke querynya
      connection.query("INSERT INTO product SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err.message("The data you entered must be complete"));
        }
      });
    });
  },

  // UPDATE
  updateProduct: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE product SET ? WHERE id = ?",
        [data, id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  // DELETE
  // Delete disini berdasarkan id
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM product WHERE id = ?",
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err.message("data you want to delete does not exist"));
          }
        }
      );
    });
  },
};

module.exports = products;
