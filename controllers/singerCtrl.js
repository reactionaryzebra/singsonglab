const Singer = require('../models/singers')

const showAllSingers = (req, res) => {
  Singer.find({}, (err, singers) => {
    err ? console.log(err) : res.render('./singers/index', {
      singers
    })
  })
}


module.exports = {
  showAllSingers
}