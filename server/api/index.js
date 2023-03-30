const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/calendar', require('./calendar'))
router.use('/task', require('./task'))
router.use('/note', require('./note'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
