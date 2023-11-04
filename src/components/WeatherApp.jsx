import { Link } from "react-router-dom";
import { useContext } from 'react';
import { WeatherApiContext } from '../context/WeatherApiContext';

const WeatherApp = () => {
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
    <div className="flex flex-col justify-center items-center mt-6 relative">
      <Link to='info'>
        <i className="fa-solid fa-bars absolute top-1 right-0 duration-150 hover:scale-125"></i>
      </Link>
      <div>
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
    </div>
  )
}

export default WeatherApp