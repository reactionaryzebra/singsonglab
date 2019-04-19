const Song = require('../models/songs')
const Singer = require('../models/singers')

const showNewPage = (req, res) => {
  Singer.find({}, (err, singers) => {
    err ? console.log(err) : res.render('./songs/new', {
      singers
    })
  })
}

const addSong = (req, res) => {
  Song.create(req.body, (err, song) => {
    err ? console.log(err) : res.redirect('/songs')
  })
}

const showAllSongs = (req, res) => {
  Song.find({}, (err, songs) => {
    err ? console.log(err) : res.render('./songs/index', {
      songs
    })
  })
}

module.exports = {
  showNewPage,
  addSong,
  showAllSongs
}