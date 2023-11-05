import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const myKey = '7f2842be09735b3b26ec4dc10e6fe0f3';
export const WeatherApiContext = createContext();

export const WeatherApiContextProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${myKey}`;

  useEffect(() => {
    if (city === null || countryCode === null) return;
    setIsFetching(true)
    axios.get(url)
      .then(response => setData(response))
      .finally(() => setIsFetching(false));
  }, [url]);

  return (
    <WeatherApiContext.Provider value={{ setCity, setCountryCode, data, isFetching }}>
      {children}
    </WeatherApiContext.Provider>
  )
};
