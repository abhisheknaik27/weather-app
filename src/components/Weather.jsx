import React, { useEffect, useState } from 'react'
import './Weather.css';
import { FaSearchLocation } from "react-icons/fa";
import clouds from '../assets/clouds.png';
import drizzle from '../assets/drizzle.png';
import rain from '../assets/rain.png';
import snowfall from '../assets/snowfall.png';
import sun from '../assets/sun.png';
import night from '../assets/night.png';
import { WiHumidity } from "react-icons/wi";
import { PiWindFill } from "react-icons/pi";


const Weather = () => {
  
  const [weatherData, setWeatherData] = useState([]);
  const allIcons = {
    "01d": sun,
    "01n": night,
    "02d": clouds,
    "03d": clouds,
    "04d": clouds,
    "09d": drizzle,
    "10d": drizzle,
    "11d": rain,
    "13d": snowfall,
    "50d": snowfall
  }

  const search = async(city) => {
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const icon = allIcons[data.weather[0].icon ] || sun;
        setWeatherData({
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temp: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
        })
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
       <img src={weatherData.icon} className='weather-icon' alt="" />
       <p className='temperature'>{weatherData.temp}°C</p>
       <p className='location'>{weatherData.location}</p>

       <div className="weather-data">
        <div className="col">
            <div className='icon'>
            <WiHumidity />
            </div>
            <div className='text'>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
            </div>
        </div>

        <div className="col">   
            <div className='icon'>
                <PiWindFill />
            </div>
            <div className='text'>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Weather
