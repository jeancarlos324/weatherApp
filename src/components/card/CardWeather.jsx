import { useState } from "react";
import useLocation from "../../hooks/useLocation";
import Chip from "../chip/Chip";

const CardWeather = () => {

  const [temperature, setTemperature] = useState(true);
  const { location, weather: data } = useLocation();

  const temp = data.main?.temp;
  const temp_min = data.main?.temp_min;
  const temp_max = data.main?.temp_max;
  const kelvinToCelsius = (temperature) => Math.round(temperature - 273.15);
  const celsiusToFahrenheit = (temperature) => (temperature * 9) / 5 + 32;

  const changeDegree = () => setTemperature(!temperature);
  return (
    <div className="flex flex-col items-center text-white bg-[url(https://static.abc.es/Media/201509/24/equinoccio--644x362.jpg)] p-5 gap-3 rounded-3xl shadow-2xl">
      <h1 className="font-bold text-3xl">Weather App</h1>
      <div className="flex justify-between w-full">
        <span className="uppercase text-2xl pl-2 font-semibold">{data.weather?.[0].description}</span>
        <div className="flex gap-2 items-baseline">
          <span className="font-bold text-xl">{data.name}</span>
          <span className="text-sm">{data.sys?.country}</span>
        </div>
      </div>
      <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-row   gap-5 md:justify-center md:items-center">
        <div className=" sm:w-1/2 sm:h-1/2  md:h-1/3 md:w-1/3 m-2  relative bg-[#00000052] rounded-2xl backdrop-blur">
          <div className="absolute font-bold left-3 top-2">
            <span className="text-4xl ">
              {" "}
              {temperature
                ? kelvinToCelsius(temp)
                : celsiusToFahrenheit(kelvinToCelsius(temp))}
            </span>
            <span className="text-2xl ">{temperature ? "C°" : "F°"}</span>
          </div>
          <img
           className="m-auto"
            src={`http://openweathermap.org/img/wn/${data.weather?.[0].icon}@4x.png`}
            alt={data.weather?.[0].main}
          />
        </div>
        <div className=" grid grid-cols-2 sm:w-full md:w-2/3 gap-3">
          <Chip
            title={"Wind Speed: "}
            content={`${data.wind?.speed} m/s`}
            iconName="fa-wind"
          />
          <Chip
            title={"Pressure: "}
            content={`${data.main?.pressure} hPa`}
            iconName="fa-clock"
          />
          <Chip
            title={"Humidity: "}
            content={`${data.main?.humidity} %`}
            iconName="fa-droplet"
          />
          <Chip
            title={"Temperature: "}
            content={`${
              temperature
                ? kelvinToCelsius(temp)
                : celsiusToFahrenheit(kelvinToCelsius(temp))
            } ${temperature ? "Celsius" : "Fahrenheit"}`}
            iconName="fa-temperature-full"
          />
          <Chip
            title={"Min: "}
            className="text-xl text-blue-400 hover:text-blue-500"
            content={`${
              temperature
                ? kelvinToCelsius(temp_min)
                : celsiusToFahrenheit(kelvinToCelsius(temp_min))
            } ${temperature ? "C°" : "F°"}`}
            iconName="fa-snowflake"
          />
          <Chip
            title={"Max: "}
            className=" text-xl text-orange-400 hover:text-orange-500"
            content={`${
              temperature
                ? kelvinToCelsius(temp_max)
                : celsiusToFahrenheit(kelvinToCelsius(temp_max))
            } ${temperature ? "C°" : "F°"}`}
            iconName="fa-sun"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={changeDegree}
          className=" sm: w-full md:w-1/2 border-gray-300 border-2 p-2 rounded-xl hover:scale-105 hover:bg-blue-500 ring-1 opacity-90 ease-in transition duration-300"
        >
          Change {temperature ? "Celsius" : "Fahrenheit"}
        </button>
      </div>
    </div>
  );
};

export default CardWeather;
