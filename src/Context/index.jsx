import React, { useContext, createContext, useState, useEffect } from "react";

import axios from "axios";
 

const StateContext = createContext()

export const StateContextProvider = ({children})  => {
    // state for the app
    const [weather, setWeather] = useState({});

    const [values, setValues] = useState([]);

    const[place, setPlace] = useState('Dakar, Sénégal');

    const [location, setLocation] = useState('');


    // fetch api
    const fetchWeather = async()  => {

        const options = {
 
            method: 'GET',

            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',

            params: {

              
                aggregateHours: '24',
  
                location: place,

                contentType: 'json',

                unitGroup: 'metric',

                shortColumnNames: 0,

            },

            headers: {
                'X-RapidApi-key' : import.meta.env.VITE_API_KEY,

                'X-RapidApi-Host' : 'visual-crossing-weather.p.rapidapi.com'
                
            }

        }

        try{

            const response = await axios.request(options);

            console.log(response.data)

            const thisData = Object.values(response.data.locations)[0];

            setLocation(thisData.address)

            setValues(thisData.values)

            setWeather(thisData.values[0])

        }catch(e){
            
            console.error(e);

            // if the api throws error
            alert('This place does not exist')
        }
    } 

    useEffect(() => {

        fetchWeather()
    }, [place])


    useEffect(() => {
        
        console.log(values)

    }, [values])

    return(

       <StateContext.Provider value={{

        weather,

        setPlace,

        values,

        location,

        place

       }}>

          {children}

       </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)
     
