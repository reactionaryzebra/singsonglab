const express = require('express')
const router = express.Router()
const singerCtrl = require('../controllers/singerCtrl')

router.get('/', singerCtrl.showAllSingers)
router.get('/new', singerCtrl.showNewPage)
router.post('/', singerCtrl.addSinger)
router.get('/:id/edit', singerCtrl.showEditPage)
router.get('/:id', singerCtrl.showOneSinger)
router.delete('/:id', singerCtrl.deleteOneSinger)
router.put('/:id', singerCtrl.updateSinger)


module.exports = router