const router = require('express').Router()
const {Pug} = require('../../db')
const {isAdmin} = require('../..//gatekeepers')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const pugs = await Pug.findPaginated(req.query.page)
    res.json(pugs)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const pug = await Pug.findById(req.params.id)
    if (!pug) {
      const err = new Error('Pug not found!')
      err.status = 404
      next(err)
    } else {
      res.json(pug)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', isAdmin, async (req, res, next) => {
  try {
    const pug = await Pug.create(req.body)
    res.json(pug)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    const pug = await Pug.findById(req.params.id)
    const pupdated = await pug.update(req.body)
    res.json(pupdated)
  } catch (err) {
    next(err)
  }
})
