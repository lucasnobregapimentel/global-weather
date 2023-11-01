const WeatherApp = ({ city, country, temp, weather, icon, humidity, wind }) => {

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <div>
        <h3 className="mb-2">{city}, {country}</h3>
        <h1 className="text-4xl font-bold">{temp}°C</h1>
      </div>
      <div className="flex justify-center items-center my-2">
        <span>{weather}</span>
        <img className="w-16" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
      </div>
      <div className="flex">
        <div>
          <i className="fa-solid fa-droplet"></i>
          <span className="ml-2">{humidity}%</span>
        </div>
        <div className="ml-16">
          <i className="fa-solid fa-wind"></i>
          <span className="ml-2">{wind}km/h</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp