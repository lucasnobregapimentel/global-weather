import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import WeatherApp from './components/WeatherApp';

const apiKey = '';

function App() {
  const { register, handleSubmit } = useForm();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  function createWeatherData(data) {
    if (data === '') return;
    setIsFetching(true);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.countryCode}&units=metric&appid=${apiKey}`)
      .then(response => setWeatherData(response))
      .catch(err => setError(err))
      .finally(() => setIsFetching(false));
  }

  return (
    <div className='flex flex-col h-screen justify-center items-center bg-sky-300'>
      <div className='w-[350px] bg-sky-400 rounded-xl p-8 text-white text-center shadow-xl'>
        <h1 className='text-2xl font-bold border border-sky-400 border-b-sky-500 pb-3 mb-4'>Global Weather</h1>
        <div>
          <form className='flex justify-between items-center' onSubmit={handleSubmit(createWeatherData)}>
            <div className='text-left'>
              <div className='flex flex-col mb-4'>
                <label htmlFor="">Cidade:</label>
                <input
                  className='p-2 rounded-xl text-black border-2 border-sky-500 focus:outline-none'
                  type="text"
                  placeholder="Digite a cidade..."
                  {...register('city')}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Código do país:</label>
                <input
                  className='p-2 rounded-xl text-black border-2 border-sky-500 focus:outline-none'
                  type="text"
                  placeholder="Digite o código do país..."
                  {...register('countryCode')}
                />
              </div>
            </div>
            <button className='bg-sky-500 p-4 rounded-xl duration-150 hover:bg-sky-600 w-16 hover:scale-110' type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div>
          {isFetching && <p>Carregando...</p>}
          {weatherData && <WeatherApp city={weatherData.data.name} country={weatherData.data.sys.country} temp={weatherData.data.main.temp} weather={weatherData.data.weather[0].description} icon={weatherData.data.weather[0].icon} humidity={weatherData.data.main.humidity} wind={weatherData.data.wind.speed} />}
        </div>
      </div>
    </div >
  )
}

export default App
