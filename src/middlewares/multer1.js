const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  },
})

const filerFilter = (req, file, cb) => {
  cb(null, true)
}

upload = multer({ storage: storage, fileFilter: filerFilter })

module.exports = {
  upload,
}
