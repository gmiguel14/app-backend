const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

routes = express.Router()
upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)
routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.post('/spots/:spot_id/bookings', SpotController.store)
routes.post('/dashboard', BookingController.store)

routes.get('/test', (req, res) => {
  return res.json({ teste: 'teste' })
})

module.exports = routes
