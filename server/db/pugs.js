const Sequelize = require('sequelize')
const {Op} = Sequelize
const db = require('./database')

const Pug = db.define('pugs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/default.png'
  }
})

Pug.findPaginated = (page = 0) => {
  return Pug.findAll({
    attributes: ['name', 'id'],
    limit: 10,
    order: [
      ['id']
    ],
    where: {
      id: {
        [Op.gt]: page
      }
    }
  })
}

module.exports = Pug
