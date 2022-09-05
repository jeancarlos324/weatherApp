import { useState } from "react";
import useLocation from "../../hooks/useLocation";

const CardWeather = () => {
  const KEY = "f1e7fe6f7c629c04df4435446c528c5b";
  const { location, weather: data } = useLocation(KEY);
  const tempCelsius = Math.round(data.main?.temp - 273.15, -1);
  const [temperature, setTemperature] = useState(true);
  const changeDegree = () => setTemperature(!temperature);
  console.log(data);
  return (
    <div className="flex flex-col items-center text-white bg-[url(https://static.abc.es/Media/201509/24/equinoccio--644x362.jpg)] p-5 gap-3 rounded-3xl shadow-xl">
      <h1 className="font-bold text-3xl">Weather App</h1>
      <div>
        <span>{data.name}</span>
        <span>{data.sys?.country}</span>
      </div>
      <div className="flex gap-5">
        <div className="relative bg-[#00000052] rounded-2xl] transition ease-in duration-300">
          <div className="absolute font-bold left-3 top-2">
            <span className="text-4xl ">
            {temperature ? tempCelsius : (tempCelsius * 9) / 5 + 32}
            </span>
            <span className="text-2xl ">
            {temperature ? "C°" : "F°"}
            </span>
          </div>
          <img 
            src={`http://openweathermap.org/img/wn/${data.weather?.[0].icon}@4x.png`}
            alt={data.weather?.[0].main}
          />
        </div>
        <div className="flex flex-col">
          <span>{data.weather?.[0].description}</span>
          <span>Wind Speed: span{data.wind?.speed} m/s</span>
          <span>Pressure: {data.main?.pressure} hPa</span>
          <span>Humidity: {data.main?.humidity}%</span>
          <span>Temperature: {tempCelsius} Celsius</span>
          <span>
            Temperature:{" "}
            {temperature ? tempCelsius : (tempCelsius * 9) / 5 + 32}
            {temperature ? "C°" : "F°"}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-end">
      <button onClick={changeDegree} className="bg-blue-500 p-2 rounded-xl opacity-90 ease-in transition duration-300">
        Changes {temperature ? "Celsius" : "Fahrenheit"}
      </button>
      </div>
    </div>
  );
};

export default CardWeather;
