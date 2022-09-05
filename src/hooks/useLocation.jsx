import axios from "axios";
import { useState, useEffect } from "react";

const useLocation = (keyAPI) => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const getPosition = () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      )
    );
  };

  useEffect(() => {
    if (location.coords !== undefined) {
      const KEY = keyAPI;
      const LAT = location.coords.latitude;
      const LOG = location.coords.longitude;
      axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LOG }&appid=${KEY}`
      )
      .then((res) => {
        setWeather(res.data);
      })
      .finally(() => setLoading(false));
    }
  }, [location]);

  useEffect(() => {
    getPosition()
      .then((res) => {
        setLocation(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return {location,weather,loading};
};

export default useLocation;
