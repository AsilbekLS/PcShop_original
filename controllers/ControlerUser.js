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
  
  //Method:     GET
  //descount:      Get one travel book by id
  const getTravelById3 = async (req, res) => {
    try {
      const Users = await User.findById(req.params.id)
  
      if(!Users){
        return res.status(404).json({
          message: 'Not found'
        })
      }
  
      return res.status(200).json({
        message: 'success',
        Users
      })
    } catch (err) {
      res.send(err)
    }
  }
  
  //Method:     POST
  //descount:      Add new travel book
  const addTravelBook3 = async (req, res) => {
    try {
      const { Name,email,password } = req.body
  
      const newTravel = await User.create({
        Name,
        email,
        password
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
  const updateTravelBook3 = async (req, res) => {
    try {
      const  { Name,email,password } = req.body
  
      const updatedTravel = await User.findByIdAndUpdate(req.params.id, {
        Name,
        email,
        password
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
  const removeTravelBook3 = async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id)
  
      res.status(200).json({
        message: 'Deleted',
      })
    } catch (err) {
      res.send(err)
    }
  }



  module.exports = {

    getAllTravels3,
    getTravelById3,
    addTravelBook3,
    updateTravelBook3,
    removeTravelBook3,}