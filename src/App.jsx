import './App.css'

import { useState } from 'react'

import search from './assets/Icons/search.svg'

import { useStateContext } from './Context';

import { BackGroundLayaout, WeatherCard, MiniCard } from './Components';



function App() {


    const [input, setInput] = useState('');

    const {weather, location, values, place, setPlace} = useStateContext();



    const submitCity = () => {

      setPlace(input)

      setInput('')

    }
     

  return (
    <div className='wl-full h-screen text-white px-8'>

     <nav className="w-full p-3 flex justify-between items-center">

      <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>

      <div className="bg-white w-[15rem] overflow-hidden 
      
      shadow-2xl rounded flex items-center p-2 gap-2">

        <img src={search} alt="search" 

        className='w-[1.5rem] h-[1.5rem]'

        id='search' />

        <input onKeyUp={(e) =>{

          if(e.key === 'Enter') {

            submitCity(e);
            
          }
        }} type="text" placeholder='Search city'

        className='focus:outline-none w-full text-[#212121] text-lg' 

        value={input} 

        onChange={e => setInput(e.target.value)} />
        
      </div>
     </nav>
      
      <BackGroundLayaout />

      <main className='w-full flex flex-wrap gap-8 py-4 
      
      px-[10%] items-center justify-center'>

        <WeatherCard 
           places={place}
        place={location} 
      
        windspeed={weather.windspeed}

        humidity={weather.humidity}

        temperature={weather.temp}

        heatIndex={weather.heatIndex}

        iconString={weather.iconString}

        conditions={weather.conditions}
        
        />

        <div className="flex justify-cen ter
        
        gap-8 flex-wrap w-[60%]">

          {

            values?.slice(1, 7).map(curr => {

             return (

              <MiniCard

              key={curr.datetime}

              time={curr.datetime}

              temp={curr.temp}

              iconString={curr.conditions}
              
              />

             )

            })

          }

        </div>

      </main>
      
    </div>
  )
}

export default App
