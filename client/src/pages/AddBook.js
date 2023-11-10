import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [descount, setdescount] = useState('')
  const [image, setImage] = useState('')
  const [type, setType] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/travel/add", {
      title,
      descount,
      image,
      type
    })
    navigate('/')
  }
  

  return (
    <form onSubmit={handleSubmit} className='container w-50 mt-5'>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descount" className="form-label">descount</label>
        <input
          type="text"
          className="form-control"
          id="descount"
          name='descount'
          onChange={e => setdescount(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input
          type="text"
          className="form-control"
          id="image"
          name='image'
          onChange={e => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddBook
