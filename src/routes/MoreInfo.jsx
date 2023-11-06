import { useContext } from 'react';
import { WeatherApiContext } from '../context/WeatherApiContext';
import { WeatherApiForecastContext } from '../context/WeatherApiForecastContext';

const MoreInfo = () => {
  const { data } = useContext(WeatherApiContext);
  const { dataForecast } = useContext(WeatherApiForecastContext);

  console.log(dataForecast);

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

  function formatDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    const str = `${day}/${month}/${year}`

    return str;
  }

  function getTime(date) {
    const hours = date.substring(11, 13);
    const minutes = date.substring(14, 16);

    const str = `${hours}:${minutes}`;

    return str;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-sky-300 text-white">
      <div className="w-5/6 bg-sky-400 h-5/6 p-8 rounded-xl shadow-xl flex gap-4">
        <div className="w-1/3 h-full bg-sky-400 flex justify-center items-center border border-sky-400 border-r-sky-500">
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
        <div className="w-2/3 h-full bg-sky-400 rounded-xl p-8">
          <h1 className='text-2xl border border-sky-400 border-b-sky-500 pb-3 mb-4'>Previsão do tempo durante 5 dias</h1>
          <div className='flex overflow-x-scroll'>
            {dataForecast && dataForecast.data.list.map((item) => (
              <div key={item.dt} className='px-4 py-2 flex flex-col justify-center items-center border border-sky-600 rounded-xl mb-4 ml-4 first:ml-0'>
                <div className='flex flex-col justify-center items-center'>
                  <img className='w-16' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather Icon" />
                  <div className='flex flex-col'>
                    <div className='flex justify-center items-center'>
                      <i className="fa-solid fa-temperature-arrow-up"></i>
                      <span className="ml-2">{item.main.temp_max.toFixed(1)}°C</span>
                    </div>
                    <div className='flex justify-center items-center'>
                      <i className="fa-solid fa-temperature-arrow-down"></i>
                      <span className="ml-2">{item.main.temp_min.toFixed(1)}°C</span>
                    </div>
                  </div>
                </div>
                <div className='mt-2'>
                  {formatDate(item.dt_txt)}
                </div>
                <div className='mt-2'>
                  {getTime(item.dt_txt)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo