const helpers = require('../helpers/helpers')
const fs = require('fs')

module.exports = (req, res, next) => {
  // Pertama validasi req.body atau req.file, jika ternyata hasil nya undifined
  if (typeof req.file === 'undefined' || typeof req.body === 'undefined') {
    // jika error
    helpers.response(res, { message: 'Problem with sending data' }, 400)
  }

  console.log(req.file)
  let name = req.body.name
  let image = req.file.path

  // Cek tipe dari image yang dimasukan nantinya, kita hanya menerima png || jpg || jpeg ||gif
  if (
    !req.file.mimetype.includes('png') &&
    !req.file.mimetype.includes('jpg') &&
    !req.file.mimetype.includes('jpeg') &&
    !req.file.mimetype.includes('gif')
  ) {
    fs.unlinkSync(image)
    return helpers.response(res, { message: 'file ext image not support' }, 400)
  }

  if (req.file.size > 1024 * 1024) {
    fs.unlinkSync(image)
    return helpers.response(res, { message: 'File is too large' }, 400)
  }
  if (!name || !image) {
    return helpers.response(res, { message: 'all fields are required' })
  }
  next()
}
