import './App.css'

import { useRef, useState } from 'react'

import { WheatherInfo } from './conponents/wheather/WheatherInfo';
import WheatherInfo5Days from './conponents/wheather/Wheather5Days';
import axios from 'axios';

function App() {
  const [wheather, setWeather] = useState();
  const [wheather5Days, setWeather5Days] = useState();
  const inputRef = useRef();
  async function seacrhCity() {
    var city = inputRef.current.value
    const api_key = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&lang=pt_br&units=metric`;
    const ur5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&lang=pt_br&units=metric`;

    const data = await axios.get(url)
      .then(response => response.data)
      .then((data) => {
        setWeather(data);
      })

    const data5Days = await axios.get(ur5Days)
      .then(response => response.data)
      .then((data) => {
        setWeather5Days(data);
      })
  }

  return (
    <div className='container'>

      <h1>DevClub Previsão do Tempo</h1>
      <input type="text" ref={inputRef} onKeyUp={e => e.key === 'Enter' && seacrhCity()} placeholder='Digite a Cidade' />
      <button onClick={seacrhCity}>Buscar</button>

      {wheather &&
        <WheatherInfo wheather={wheather} />
      }

      {wheather5Days &&
        <WheatherInfo5Days wheather5Days={wheather5Days} />
      }
    </div>
  )
}

export default App
