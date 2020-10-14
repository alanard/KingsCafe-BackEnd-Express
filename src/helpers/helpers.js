module.exports = {
  response: (res, result, status, err, pagination) => {
    // Membuat variable yang berisi object kosong yang nantinya akan di isi oleh result
    const resultPrint = {};
    resultPrint.status = "Succes";
    resultPrint.status_code = status;
    resultPrint.result = result;
    resultPrint.err = err || null;
    if (pagination) {
    resultPrint.pagination = pagination;
    }
    return res.status(resultPrint.status_code).json(resultPrint);
  },
};
