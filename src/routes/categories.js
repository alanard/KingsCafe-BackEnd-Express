// import modul express
const express = require('express')
const router = express.Router()
// const redis = require('../middlewares/redis')

const categoriesControllers = require('../controllers/categories')

router
  .get('/', categoriesControllers.getAllCategories)
  .get('/:id', categoriesControllers.getCategoriesById)
  .post('/', categoriesControllers.insertCategories)
  .patch('/:id', categoriesControllers.updateCategories)
  .delete('/:id', categoriesControllers.deleteCategories)

module.exports = router
