import './WheatherInformation.css'

export default function WheatherInfo5Days({ wheather5Days }) {
    let dailyForecast = {};

    function convertData(dt) {
        const newDate = new Date(dt * 1000).toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: '2-digit'

        });

        return newDate;
    }
    for (let forecast of wheather5Days.list) {
        const data = new Date(forecast.dt * 1000).toLocaleDateString();
        if (!dailyForecast[data]) {
            dailyForecast[data] = forecast
        }
    }

    const nextFiveDaysForecast = Object.values(dailyForecast).slice(1, 5)
    return (
        <div className='wheather-container'>
            <h3>Previsão Próximos 5 Days</h3>
            <div className='wheather-list'>

                {nextFiveDaysForecast.map((forecast, index) => (
                    <div key={index} className='wheather-item'>
                        <p className='forecast-day'>{convertData(forecast.dt)}</p>
                        <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather-icon" />
                        <p className='forecast-description'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp)}ºC min /{Math.round(forecast.main.temp_max)}ºC max</p>
                    </div>
                ))}
            </div>
        </div>
    )
}