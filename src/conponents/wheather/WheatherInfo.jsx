import './Wheather.css'

export function WheatherInfo({ wheather }) {

    return (
        <div className='wheather-container'>
            <div>
                <h2>{wheather.name}</h2>
                <div className='wheather-info'>
                    <img src={`http://openweathermap.org/img/wn/${wheather.weather[0].icon}.png`} />
                    <p className='temperature'>{Math.round(wheather.main.temp)} ºC</p>
                </div>
            </div>

            <p className='description'>{wheather.weather[0].description}</p>

            <div className='details'>
                <p>Sensação Térmica: {Math.round(wheather.main.feels_like)}  ºC</p>
                <p>Umidade do Ar: {wheather.main.humidity}</p>
                <p>Pressão: {wheather.main.pressure} %</p>
            </div>
        </div>
    )
}