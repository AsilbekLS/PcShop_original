import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Bascet() {

  const [homapi, setHomapi] = useState([])
  const [homapi1, setHomapi1] = useState([])
  

  const fetchData = () => {
  
      axios.get('http://localhost:5000/api/buscet')
  .then(function (response) {
    setHomapi1(response.data.travels)
    console.log(response.data.travels);
    
    
  })

.catch(function (error) {
  // обрабатываем ошибку
  console.error(error);
});
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    console.log(homapi1);
  }, [homapi1])
  return (
    <div className='home'>
      <h1>Salom</h1>
      {
        homapi1.map((item, index)=>(
          <Card key={index} className='sas' sx={{ maxWidth: 345 }}>
           <img src={item.image} alt="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
            {item.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                -{item.descount}%
              </Typography>

            </CardContent>
            <CardActions>
              <Button size="small" >Bay</Button>
              <Button size="small">Add basket</Button>
            </CardActions>
          </Card>
        ))
      }
      
    </div>
  )
}