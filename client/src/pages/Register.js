import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"

const Register = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasswors] = useState('')
    const [toogle, setToogle] = useState()
    const navigate = useNavigate()
  
    const handleSubmit =(e) => {
        e.preventDefault()
        
        try {

          if(Name && email && password){
          axios.post("http://localhost:5000/api/user/add", {
            Name,
            email,
            password
          })
          navigate('/')

         setToogle(false)
        }
        if(!Name){
          console.log('resres');
          setToogle(true)
        }
        
      } catch (error) {
          console.error(error)
        }
      }
  

  useEffect(() => {
    console.log(Name);
  }, [Name])

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Name</label>
        <h1  className='h11' style={  toogle ? {display:'block'} :{}}>Nimadurni kiritmading</h1>
        <input 
          type="text" 
          className="form-control" 
          id="Name" 
          name="Name"
          onChange={e => setName(e.target.value)}
          value={Name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descr" className="form-label">Email</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name='email' 
          onChange={e => setEmail(e.target.value)}
          value={email} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Password</label>
        <input 
          type="text" 
          className="form-control" 
          id="password" 
          name='password' 
          onChange={e => setPasswors(e.target.value)}
    
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Register
