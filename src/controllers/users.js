const bcrypt = require('bcryptjs')
const modelUser = require('../models/users')
const helper = require('../helpers/helpers')
const jwt = require('jsonwebtoken')
module.exports = {
  register: async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    // const isUser = modelUser.cekEmail(email)
    const data = {
      email,
      password,
      firstName,
      lastName,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    const resultEmail = await modelUser.getUserByEmail(email)
    if (resultEmail.length > 0) {
      helper.response(res, { message: 'Email Sudah Terdaftar' }, 403, null)
    } else if (resultEmail == '') {
      helper.response(res, { message: 'Semua Data Harus Diisi' }, 403, null)
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(data.password, salt, function (err, hash) {
        data.password = hash
        modelUser
          .register(data)
          .then((result) => {
            helper.response(res, result, 200, null)
          })
          .catch((err) => { })
      })
    })
  },
  login: (req, res) => {
    const { email, password } = req.body
    modelUser
      .getUserByEmail(email)
      .then((result) => {
        if (result.length < 1) {
          helper.response(
            res,
            { message: 'the email you entered is not registered' },
            201,
            null,
          )
        } else {
          const user = result[0]
          const hash = user.password
          bcrypt.compare(password, hash).then((resCompare) => {
            if (resCompare) {
              // Yang tidak perlu ditampilkan ke frontend maka di delete
              const payload = {
                id: user.id,
                email: user.email,
                roleId: user.roleId,
              }
              jwt.sign(
                payload,
                process.env.SECRET_KEY,
                { expiresIn: '3h' },
                (err, token) => {
                  user.token = token

                  delete user.password
                  delete user.createdAt
                  delete user.updatedAt
                  helper.response(res, user, 200)
                },
              )
            } else {
              helper.response(
                res,
                { message: 'the password you entered is incorrect' },
                201,
                null,
              )
            }
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
