const WeatherApp = ({ city, country, temp, weather, icon, humidity, wind }) => {

  let weatherDescription = '';

  switch (icon) {
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
    <div className="flex flex-col justify-center items-center mt-6">
      <div>
        <h3 className="mb-2">{city}, {country}</h3>
        <h1 className="text-4xl font-bold">{temp}°C</h1>
      </div>
      <div className="flex justify-center items-center my-2">
        <span>{weatherDescription}</span>
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