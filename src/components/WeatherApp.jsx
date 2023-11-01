const WeatherApp = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <div>
        <h3 className="mb-2">Cidade, BR</h3>
        <h1 className="text-4xl font-bold">00°C</h1>
      </div>
      <div className="flex justify-center items-center">
        <span>Nublado</span>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon" />
      </div>
      <div className="flex">
        <div>
          <i className="fa-solid fa-droplet"></i>
          <span>50%</span>
        </div>
        <div className="ml-16">
          <i className="fa-solid fa-wind"></i>
          <span>3km/h</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp