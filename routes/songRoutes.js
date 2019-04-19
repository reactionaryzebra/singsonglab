const express = require('express')
const router = express.Router()
const songCtrl = require('../controllers/songCtrl')

router.get('/new', songCtrl.showNewPage)
router.post('/', songCtrl.addSong)
router.get('/', songCtrl.showAllSongs)

module.exports = router