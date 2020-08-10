// import modul express
const express = require('express')
const router = express.Router()

const historiesControllers = require('../controllers/histories')

router
  .get('/', historiesControllers.getAllHistories)
  .get('/:id', historiesControllers.getHistoriesById)
  .post('/', historiesControllers.insertHistories)
  .patch('/:id', historiesControllers.updateHistories)
  .delete('/:id', historiesControllers.deleteHistories)

module.exports = router
