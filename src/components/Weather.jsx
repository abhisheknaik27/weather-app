import React, { useEffect } from 'react'
import './Weather.css';
import { FaSearchLocation } from "react-icons/fa";
import clouds from '../assets/clouds.png';
import drizzle from '../assets/drizzle.png';
import rain from '../assets/rain.png';
import snowfall from '../assets/snowfall.png';
import sun from '../assets/sun.png';
import wind from '../assets/wind.png';
import { WiHumidity } from "react-icons/wi";
import { PiWindFill } from "react-icons/pi";


const Weather = () => {

  const search = async(city) => {
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API}`

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    }catch(err){

    }
  }  

  useEffect(() => {
    search('London');
  }, [])

  return (
    <div className='weather'>
       <div className='searchbar'>
        <input type="text" placeholder='Search' />
        <FaSearchLocation className='searchicon' />
       </div>
       <img src={sun} className='weather-icon' alt="" />
       <p className='temperature'>16°C</p>
       <p className='location'>London</p>

       <div className="weather-data">
        <div className="col">
            <div className='icon'>
            <WiHumidity />
            </div>
            <div className='text'>
                <p>91%</p>
                <span>Humidity</span>
            </div>
        </div>

        <div className="col">   
            <div className='icon'>
                <PiWindFill />
            </div>
            <div className='text'>
                <p>3.6 km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Weather
