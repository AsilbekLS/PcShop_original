const { Router } = require('express')
const router = Router()


const { 
  getAllTravels2, 
  getTravelById2, 
  addTravelBook2,
  updateTravelBook2,
  removeTravelBook2
} = require('../controllers/travelControllers')


router.get('/', getAllTravels2)
router.post('/add1', addTravelBook2)
router.get('/:id', getTravelById2)
router.put('/:id', updateTravelBook2)
router.delete('/:id', removeTravelBook2)


module.exports = router


