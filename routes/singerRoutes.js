const express = require('express')
const router = express.Router()
const singerCtrl = require('../controllers/singerCtrl')

router.get('/', singerCtrl.showAllSingers)

module.exports = router