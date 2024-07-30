import React, { useEffect, useState } from 'react'

import sun from '../assets/Icons/clear.png'

import fog from '../assets/Icons/fog.png'

import cloud from '../assets/Icons/cloud.png'

import rain from '../assets/Icons/rain.png'

import snow from '../assets/Icons/snow.png'

import storm from '../assets/Icons/storm.png'

import wind from '../assets/Icons/wind.png'

import '../index.css'

const MiniCard = ({time, temp, iconString}) => {

  const [icon, setIcon] = useState();

  useEffect(() => {

    if(iconString) {

      if(iconString.toLowerCase().includes('cloud')) {

        setIcon(cloud)

      } else if (iconString.toLowerCase().includes('rain')) {  

        setIcon(rain)

      } else if (iconString.toLowerCase().includes('clear')) {

        setIcon(sun)

      } else if (iconString.toLowerCase().includes('fog')) {

        setIcon(fog)

      } else if (iconString.toLowerCase().includes('storm')) {

        setIcon(storm)

      } else if (iconString.toLowerCase().includes('wind')) {

        setIcon(wind)

      } else if (iconString.toLowerCase().includes('snow')) {

        setIcon(snow)

      }

    }

  }, [iconString]); 

  return (

    <div className='glassCard w-[10rem]
    
    h-[10rem] p-4 flex flex-col' id='miniCard'>

      <p className="text-center">

        {new Date(time).toLocaleTimeString('en', {weekday: 'long'}).split(" ")[0]}

      </p>

      <hr />

      <div className="w-full flex justify-center items-center flex-1">

        <img src={icon} alt="weather" className='w-[4rem] h-[4rem]' />

      </div>

      <p className="text-center font-bold">{temp}&deg;C</p>
   
    </div>

  )

}

export default MiniCard
