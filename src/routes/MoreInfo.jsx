import { Link } from "react-router-dom"
import { useContext } from 'react';
import { WeatherApiContext } from '../context/WeatherApiContext';

const MoreInfo = () => {
  const { data } = useContext(WeatherApiContext);

  let weatherDescription = '';

  switch (data.data.weather[0].icon) {
    case '01d':
      weatherDescription = 'Céu limpo';
      break;
    case '02d':
      weatherDescription = 'Poucas nuvens';
      break;
    case '03d':
      weatherDescription = 'Nuvens dispersas';
      break;
    case '04d':
      weatherDescription = 'Nuvens quebradas';
      break;
    case '09d':
      weatherDescription = 'Chuva de banho';
      break;
    case '10d':
      weatherDescription = 'Chuva';
      break;
    case '11d':
      weatherDescription = 'Tempestade';
      break;
    case '13d':
      weatherDescription = 'Neve';
      break;
    case '50d':
      weatherDescription = 'Névoa';
      break;
    case '01n':
      weatherDescription = 'Céu limpo';
      break;
    case '02n':
      weatherDescription = 'Poucas nuvens';
      break;
    case '03n':
      weatherDescription = 'Nuvens dispersas';
      break;
    case '04n':
      weatherDescription = 'Nuvens quebradas';
      break;
    case '09n':
      weatherDescription = 'Chuva de banho';
      break;
    case '10n':
      weatherDescription = 'Chuva';
      break;
    case '11n':
      weatherDescription = 'Tempestade';
      break;
    case '13n':
      weatherDescription = 'Neve';
      break;
    case '50n':
      weatherDescription = 'Névoa';
      break;
    default:
      weatherDescription = 'Erro';
      break
  }

  return (
    <div className="flex justify-center items-center h-screen bg-sky-300 text-white">
      <div className="w-5/6 bg-sky-400 h-5/6 p-8 rounded-xl shadow-xl flex gap-4">
        <div className="w-1/3 h-full bg-sky-500 rounded-xl flex justify-center items-center">
          <div className="flex flex-col justify-center items-center p-8">
            <div className="flex justify-center items-center flex-col">
              <h3 className="mb-2">{data.data.name}, {data.data.sys.country}</h3>
              <h1 className="text-4xl font-bold">{data.data.main.temp.toFixed(1)}°C</h1>
            </div>
            <div className="flex justify-center items-center my-2">
              <span>{weatherDescription}</span>
              <img className="w-16" src={`https://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`} alt="Weather Icon" />
            </div>
            <div className="flex">
              <div>
                <i className="fa-solid fa-droplet"></i>
                <span className="ml-2">{data.data.main.humidity}%</span>
              </div>
              <div className="ml-16">
                <i className="fa-solid fa-wind"></i>
                <span className="ml-2">{data.data.wind.speed}km/h</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-3">
              <h3>Sensação térmica:</h3>
              <h2 className="text-2xl font-semibold">{data.data.main.feels_like.toFixed(1)}°C</h2>
            </div>
            <div className="mt-3 flex">
              <div>
                <i className="fa-solid fa-temperature-arrow-up"></i>
                <span className="ml-2">{data.data.main.temp_max.toFixed(1)}°C</span>
              </div>
              <div className="ml-16">
                <i className="fa-solid fa-temperature-arrow-down"></i>
                <span className="ml-2">{data.data.main.temp_min.toFixed(1)}°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full bg-sky-500 rounded-xl">

        </div>
      </div>
    </div>
  )
}

export default MoreInfo