import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import WeatherApp from './components/WeatherApp';

const apiKey = 'c0f67c16d3aea2763a1f8a46ed22df0c';

function App() {
  const { register, handleSubmit } = useForm();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  function createWeatherData(data) {
    if (data === '') return;
    setIsFetching(true);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.countryCode}&appid=${apiKey}`)
      .then(response => setWeatherData(response))
      .catch(err => setError(err))
      .finally(() => setIsFetching(false));
  }

  return (
    <div className='flex flex-col h-screen justify-center items-center bg-sky-300'>
      <div className='w-[350px] bg-sky-400 rounded-xl p-8 text-white text-center'>
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
            <button className='bg-sky-500 p-4 rounded-xl duration-150 hover:bg-sky-600 w-16' type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div>
          {weatherData && <WeatherApp />}
        </div>
      </div>
    </div >
  )
}

export default App
