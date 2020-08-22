// 3

// Controller ini tempat terjadi CRUD di jalankan

// mengimport modules agar function di dalamnya bisa digunakan disini
const productModels = require("../models/product");

// Mengimport modules helper agar bisa digunakan
const helpers = require("../helpers/helpers");

const products = {
  getAllProduct: (req, res) => {
    const search = req.query.search;
    const orderby = req.query.orderby;
    const limit = req.query.limit;
    const page = req.query.page;
    const sort = req.query.sort;
    productModels
      .getAllProduct(search, orderby, limit, page, sort)
      .then((result) => {
        helpers.response(res, result, 200, null);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getProductById: (req, res) => {
    const id = req.params.id;
    productModels
      .getProductById(id)
      .then((result) => {
        if (result != "") {
          helpers.response(res, result, 200, null);
        } else {
          helpers.response(
            res,
            "The product you are looking for does not exist",
            404,
            null
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  insertProduct: (req, res) => {
    // destructuring assigment
    // Data ini yang sesuai dengan postman
    const { name, image, price, idCategory, status } = req.body;
    // Yang ini sesuai dengan database
    const data = {
      // karena property dan value nya sama maka cukup ditulis satu kali saja
      name,
      image,
      price,
      idCategory,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    productModels
      .insertProduct(data)
      // Penamaan berbeda supaya tidak bentrok dengan res yang di atas
      .then((result) => {
        if (data != null) {
          helpers.response(res, result, 200, null);
        } else {
          helpers.response(
            res,
            "the data you entered could not be empty",
            200,
            null
          );
        }
      })
      .catch((err) => {
        console.log(new Error(err));
      });
  },
  updateProduct: (req, res) => {
    const id = req.params.id;
    const { name, image, price, idCategory, status } = req.body;
    // Yang ini sesuai dengan database
    const data = {
      // karena property dan value nya sama maka cukup ditulis satu kali saja
      name,
      image,
      price,
      idCategory,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    productModels
      .updateProduct(id, data)
      // Penamaan berbeda supaya tidak bentrok dengan res yang di atas
      .then((result) => {
        console.log(result);
        helpers.response(res, result, 200, null);
      })
      .catch((err) => {
        console.log(new Error(err));
      });
  },

  deleteProduct: (req, res) => {
    const id = req.params.id;
    productModels
      .deleteProduct(id)
      .then((result) => {
        if (id !== "") {
          helpers.response(res, result, 200, null);
        } else {
          helpers.response(
            res,
            "The product you are looking for does not exist",
            200,
            null
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = products;
