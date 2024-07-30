import React, { useEffect, useState } from 'react'

export const useDate = () => {
    const locale = 'en';

    const [today, setToday] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(() =>{
            setToday(new Date());

        },60*1000)

        return () => {
            clearInterval(timerID)
        }
    },[])

    const day =  today.toLocaleString( 
        
        locale,

         { weekday: 'long' });

    const date = `${day}, ${today.getDate()}, 

    ${today.toLocaleDateString(locale, 

         { month: 'long'})}\n\n`;

    const time = today.toLocaleDateString(
        
        locale,

         {
            
            hour: 'numeric', 

         hour12: true,

          hour24: true, 

          minute: 'numeric'
        
        })

    return{
        date, time
    }
}


