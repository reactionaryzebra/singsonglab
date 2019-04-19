const Singer = require('../models/singers')

const showAllSingers = (req, res) => {
  Singer.find({}, (err, singers) => {
    err ? console.log(err) : res.render('./singers/index', {
      singers
    })
  })
}

const showNewPage = (req, res) => {
  res.render('./singers/new')
}

const addSinger = (req, res) => {
  Singer.create(req.body, (err, singer) => {
    err ? console.log(err) : res.redirect('/singers')
  })
}

const showOneSinger = (req, res) => {
  Singer.findById(req.params.id, (err, singer) => {
    err ? console.log(err) : res.render('./singers/show', {
      singer
    })
  })
}


module.exports = {
  showAllSingers,
  showNewPage,
  addSinger,
  showOneSinger
}