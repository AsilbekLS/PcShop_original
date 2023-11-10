import React, { useState,useEffect } from 'react'
import axios from 'axios'
import rasm from '../img/d5d11c91b095686fcaa0f14cf8bbb7fa-600x450_large.jpg';
import rasm1 from '../img/desktop-wallpaper-gigachad-arabic-muslim.jpg';
import rasm2 from '../img/40cdaaf3b918bc43d05a0e61c4845709.png';
import rasm3 from '../img/desktop-wallpaper-gigachad-arabic-muslim.jpg';
import './page.css'
import rasm4 from '../img/Frame 570.png'
export default function Home() {

  const [homapi, setHomapi] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,])
  const [id, setId] = useState([])
  const [title, setTitle] = useState([])
  const [descount, setdescount] = useState([])
  const [image, setImage] = useState([])
  const [test, setTest] = useState([])




  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/travel")
    setHomapi(data.travels)
 
  }



  useEffect(() => {
    fetchData()
  }, [])


  
  const handleSubmit = async (item) => {
    console.log(item.title)
    await axios.post("http://localhost:5000/api/buscet/add1", {

    title : item.title,
    descount : item.descount,
    image : item.image
    })
   
  }


  


    const [imgIndex, setImgIndex] = useState(0);
    const images = [rasm, rasm1,rasm2,rasm3];
  
    const handleLeftClick = () => {setImgIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));};
  
    const handleRightClick = () => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
 

    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const [boxPosition, setBoxPosition] = useState(0); // Add this state

  const handleLeftClick1 = () => {
    if(boxPosition >=1){
    setBoxPosition((prevPosition) => prevPosition - 1);
    // ... your existing code ...
    }
  };

  const handleRightClick1 = () => {
    console.log(homapi.length);
    console.log(boxPosition);
    if(homapi.length-5>=boxPosition){
    setBoxPosition((prevPosition) => prevPosition + 1);
    // ... your existing code ...
  }
  };

function type_search(obj) {
  console.log(obj);
}
const [value, setValue] = useState('');

const handleChange = (event) => {
  setValue(event.target.value);
  console.log(event.target.value); // Выводит значение выбранного option
}


  return (
      <div className="papa">
        <div className="sec1">
      <div className='cotigoria'>
        <button>Noutbooklar</button>
        <button>Shaxsiy kompyuterlar</button>
        <button>Aksesuarlar</button>
        <button>Manitorlar</button>
        <button>Audio texnikalar</button>
        <button>Vidiokartalar</button>
        <button>Prosserlar</button>
      </div>
  
      <div className="carusel">
        <div className="butonlar">
          <button className='right_b' onClick={handleRightClick}>onga</button>
          <button className='left_b' onClick={handleLeftClick}>chapga</button>
        </div>
  
        {images.map((img, index) => (
          <div key={index} className={`img_container ${index === imgIndex ? 'activer' : ''}`}>
            <img className='shaptoli' src={img} alt="" />
            
          </div>
        ))}
      </div>
      </div>
      <div className="sec2">
        <div className="boshjoy">
          <div className="write">
            <div className="tepa_w">
<div className="kor">

</div>
<span className='sp20'>Todays</span>
            </div>
            <span className='sp21'>Flash Sales</span>
          </div>
          <div className="clock">
            
            <span>{time.getHours()}</span> :
        <span>{time.getMinutes()}</span> :
        <span>{time.getSeconds()}</span>
         
</div>
          <div className="tudasuda">
          <button onClick={handleLeftClick1}>👈</button>
        <button onClick={handleRightClick1}>👉</button>
          </div>
        </div>
        <div className="tanla">
       { homapi.map((item, index)=>(
  <div className="box_t" style={{ transform: `translateX(${boxPosition * -300}px)` }} >
   <div className="rasm">
<img className='img_m' src={rasm1} alt="" />
   </div>
   <div className="yoz_map">
<div className="title_m">
<span className='sp30'>{item.title}</span>
</div>
<div className="price_m">
<span className='sp31'>${item.descount}</span>

</div>
<div className="stars_m">
<span>⭐️⭐️⭐️⭐️⭐️</span>
<span>(88)</span>
</div>
   </div>
  </div>
))}

        </div>
      </div>
      <div className="sec3">
      <select name="" id="" value={value} onChange={handleChange}>
          <option value="Computer">Computer</option>
          <option value="Banana">Banana</option>
          <option value="Bag">Bag</option>
          <option value="Fruits">Fruits</option>
          <option value="Dress">Dress</option>
          <option value="TV">TV</option>
        </select>
        <button>Computer</button>
        <button>Banana</button>
        <button>Bag</button>
        <button>Fruits</button>
        <button>Dress</button>
        <button>TV</button>
      </div>
    </div>
    )}
  
  
  
        
  
  