import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AddBook from './AddBook'
import Home from './Home'
import Bascet from './Bascet'
import Register from './Register'

const Main = () => {
  return (

    <div className="wrapper">
      <Navbar />
  <Routes>
    <Route path="/"   element={ <Home/>  }/>
    <Route path="/add"   element={ <AddBook/>  }/>
    <Route path="/basket"   element={ <Bascet/> }/>
    <Route path="/Register"   element={ <Register/> }/>
  </Routes>

    </div>
  )
}

export default Main
