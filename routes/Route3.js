const { Router } = require('express')
const router = Router()


const { 
  getAllTravels3, 
  getTravelById3, 
  addTravelBook3,
  updateTravelBook3,
  removeTravelBook3
} = require('../controllers/ControlerUser')


router.get('/', getAllTravels3)
router.post('/add1', addTravelBook3)
router.get('/:id', getTravelById3)
router.put('/:id', updateTravelBook3)
router.delete('/:id', removeTravelBook3)


module.exports = router


