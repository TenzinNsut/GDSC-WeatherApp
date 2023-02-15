import React,{useState} from 'react'

// components
import Search from './components/search'
import MainCard from './components/MainCard';
import ForecastCard from './components/ForecastCard';




function App() {

  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  
  const changeSearch = (value) => {
		setSearch(value)
	}


  const API_KEY = "c1d79bc81aa93ac69c22b48162dd2043";
  const FORECAST_KEY = "dccb89bf6d674d9899f153516231302";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;
  const FORECAST_API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${FORECAST_KEY}&q=${search},in&days=5&aqi=no&alerts=no`

  function searchWeatherHandler() {
    if (search !== "") {
      const fetchWeatherData = async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        setWeatherData(data);
      };
      fetchWeatherData();
      const fetchForecastData = async () => {
        const res = await fetch(FORECAST_API_URL);
        const data = await res.json();
        console.log(data);
        setForecastData(data);
      };
      fetchForecastData();
    }
  }
  

  return (
    <div className="py-10 md:h-screen w-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-center  items-center  space-y-10">
		  <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
      
      <div className='h-[1200px]  space-y-20 '>
      {weatherData.main && (
        <MainCard
          city={weatherData.name}
          humidity={weatherData.main.humidity}
          temp={weatherData.main.temp}
          min={weatherData.main.temp_min}
          max={weatherData.main.temp_max}
          description={weatherData.weather[0].description}
          icon={weatherData.weather[0].icon}
          status={weatherData.weather[0].main}
        />
        )}
        
      {forecastData.forecast && (
        <div className="text-white w-auto  md:w-auto md:min-w-[500px] mx-5 h-auto flex-col md:flex md:flex-row  md:h-[auto] p-5 rounded-xl shadow-2xl bg-[rgba(255,255,255,0.1)]  backdrop:blur-[10px] border-2 border-[rgba(255,255,255,0.25)]" >
          {forecastData.forecast.forecastday.map((x, index) => (<ForecastCard  date={x.date} icon={x.day.condition.icon} description={x.day.condition.text} temp={x.day.avgtemp_c} />))}
        </div>)}

      </div>

    </div>
  )
}

export default App
