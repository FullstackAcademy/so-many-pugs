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
  },
  biography: {
    type: Sequelize.TEXT,
    validate: {
      len: [0, 1000]
    }
  }
})

Pug.findPaginated = (page = 0) => {
  return Pug.findAll({
    attributes: ['id', 'name', 'imageUrl'],
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
