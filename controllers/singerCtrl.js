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

const deleteOneSinger = (req, res) => {
  Singer.findByIdAndDelete(req.params.id, (err, response) => {
    err ? console.log(err) : res.redirect('/singers')
  })
}

const showEditPage = (req, res) => {
  Singer.findById(req.params.id, (err, singer) => {
    err ? console.log(err) : res.render('./singers/edit', {
      singer
    })
  })
}

const updateSinger = (req, res) => {
  Singer.findByIdAndUpdate(req.params.id, req.body, (err, singer) => {
    err ? console.log(err) : res.redirect('/singers')
  })
}


module.exports = {
  showAllSingers,
  showNewPage,
  addSinger,
  showOneSinger,
  deleteOneSinger,
  showEditPage,
  updateSinger
}