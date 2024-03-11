import { useEffect, useState } from 'react'
import { useStateContext } from '../Context'

// images

import Clear from '../assets/images/clear.jpg'
import Fog from '../assets/images/fog.jpg'
import Cloudy from '../assets/images/cloud.jpeg'
import Rainy from '../assets/images/rain.jpeg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/storm.jpg'
import Wind from '../assets/images/wind.jpg'



const BackGroundLayaout = ({imageString}) => {

  const {weather} = useStateContext()

  const[image, setImage] = useState(Clear)

  // console.log(weather)

  useEffect(() => {

    
    if(imageString) {

      let imageString = weather.conditions

      if(imageString.toLowerCase().inludes('clear')) { 

      setImage(Clear)

    } else  if (imageString.toLowerCase().includes('cloud')) {

      setImage(Cloudy)

    } 
    else  if (imageString.toLowerCase().includes('rain') 
    
    || imageString.toLowerCase().includes('shower')) {

      setImage(Rainy)

    } else if  (imageString.toLowerCase().includes('snow')) {

      setImage(Snow)

    } else if  (imageString.toLowerCase().includes('fog')) {
      
      setImage(Fog)

    } else if (imageString.toLowerCase().includes('thunder')
    
    || imageString.toLowerCase().includes('storm')) {

      setImage(Stormy)
    }

  }

  }, [weather])


  return (
    <div>
      
      <img src={image} alt="weather_image"
      
      className='h-screen w-full fixed left-0 top-0 -z-[10]' />
      
    </div>
  )
}

export default BackGroundLayaout
