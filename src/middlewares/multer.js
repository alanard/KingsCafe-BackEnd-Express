const multer = require('multer')
const path = require('path')

// Pertama set storage => file name dan destination
const storage = multer.diskStorage({
  // Tempat folder uploads
  destination: function (req, res, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(file)

    cb(
      null,
      'Image-' +
        new Date().toISOString().replace(/:/g, '-') +
        file.originalname,
    )
  },
})

const filerFilter = (req, res, cb) => {
  cb(null, true)
}

let upload = multer({
  storage: storage,
  fileFilter: filerFilter,
})

module.exports = upload.single('image')
