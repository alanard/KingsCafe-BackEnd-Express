// import modul express
const express = require('express')
const router = express.Router()

const categoriesControllers = require('../controllers/categories')

router
  .get('/', categoriesControllers.getAllCategories)
  .get('/:id', categoriesControllers.getCategoriesById)
  .get('/:name', categoriesControllers.getCategoriesByName)
  .post('/', categoriesControllers.insertCategories)
  .patch('/:id', categoriesControllers.updateCategories)
  .delete('/:id', categoriesControllers.deleteCategories)

module.exports = router
