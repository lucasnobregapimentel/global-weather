import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const myKey = '7f2842be09735b3b26ec4dc10e6fe0f3';
export const WeatherApiForecastContext = createContext();

export const WeatherApiForecastContextProvider = ({ children }) => {
  const [cityForecast, setCityForecast] = useState(null);
  const [countryCodeForecast, setCountryCodeForecast] = useState(null);
  const [dataForecast, setDataForecast] = useState(null);
  const [isFetchingForecast, setIsFetchingForecast] = useState();

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityForecast},${countryCodeForecast}&units=metric&appid=${myKey}`;

  useEffect(() => {
    if (cityForecast === null || countryCodeForecast === null) return;
    setIsFetchingForecast(true)
    axios.get(url)
      .then(response => setDataForecast(response))
      .finally(() => setIsFetchingForecast(false));
  }, [url])

  return (
    <WeatherApiForecastContext.Provider value={{ setCityForecast, setCountryCodeForecast, dataForecast, isFetchingForecast }}>
      {children}
    </WeatherApiForecastContext.Provider>
  )
}
