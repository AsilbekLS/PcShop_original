const Travel = require('../models/Travel.model')
const Buscet = require('../models/Buscet')

//Method:     GET
//descount:      Get all travels books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find()

    res.status(200).json({
      message: 'success',
      travels: travels.reverse()
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     GET
//descount:      Get one travel book by id
const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id)

    if(!travel){
      return res.status(404).json({
        message: 'Not found'
      })
    }

    return res.status(200).json({
      message: 'success',
      travel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     POST
//descount:      Add new travel book
const addTravelBook = async (req, res) => {
  try {
    const { title, image, descount,type } = req.body

    const newTravel = await Travel.create({
      title,
      image,
      descount,
      type
    })

    res.status(201).json({
      message: 'success',
      newTravel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     PUT
//descount:      Edit travel book by its ID
const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descount,type } = req.body

    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descount,
      type
    })

    res.status(200).json({
      message: 'success',
      updatedTravel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     DELETE
//descount:      Removing travel book by ID
const removeTravelBook = async (req, res) => {
  try {
    await Travel.findByIdAndRemove(req.params.id)
    
    res.status(200).json({
      message: 'Deleted',
    })
  } catch (err) {
    res.send(err)
  }
}






//Method:     GET
//descount:      Get all travels books
const getAllTravels2 = async (req, res) => {
  try {
    const Buscets = await Buscet.find()


    res.status(200).json({
      message: 'success',
      travels: Buscets.reverse()
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     GET
//descount:      Get one travel book by id
const getTravelById2 = async (req, res) => {
  try {
    const Buscets = await Buscet.findById(req.params.id)

    if(!Buscets){
      return res.status(404).json({
        message: 'Not found'
      })
    }

    return res.status(200).json({
      message: 'success',
      Buscets
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     POST
//descount:      Add new travel book
const addTravelBook2 = async (req, res) => {
  try {
    const { title, image, descount,type } = req.body

    const newTravel = await Buscet.create({
      title,
      image,
      descount,
      
    })

    res.status(201).json({
      message: 'success',
      newTravel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     PUT
//descount:      Edit travel book by its ID
const updateTravelBook2 = async (req, res) => {
  try {
    const { title, image, descount,type } = req.body

    const updatedTravel = await Buscet.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descount
      ,type
    })

    res.status(200).json({
      message: 'success',
      updatedTravel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     DELETE
//descount:      Removing travel book by ID
const removeTravelBook2 = async (req, res) => {
  try {
    await Buscet.findByIdAndRemove(req.params.id)

    res.status(200).json({
      message: 'Deleted',
    })
  } catch (err) {
    res.send(err)
  }
}

const User = require('../models/User')

//Method:     GET
//descount:      Get all travels books
const getAllTravels3 = async (req, res) => {
    try {
      const Users = await User.find()
  
  
      res.status(200).json({
        message: 'success',
        travels: Users.reverse()
      })
    } catch (err) {
      res.send(err)
    }
  }
  
 


  
module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
  getAllTravels2,
  getTravelById2,
  addTravelBook2,
  updateTravelBook2,
  removeTravelBook2,
 }
