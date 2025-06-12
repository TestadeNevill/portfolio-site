import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  TrafficLayer,
} from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 34.0522,
  lng: -118.2437, // Default to Los Angeles
};

const LiveDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [aqiData, setAqiData] = useState(null);
  const [userLocation, setUserLocation] = useState(defaultCenter);

  const fetchWeather = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      );
      const noonForecast = res.data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      );
      setWeatherData(res.data.list[0]);
      setForecastData(noonForecast.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch weather data:", err);
    }
  };

  const fetchAQI = async () => {
    try {
      const res = await axios.get(
        `https://api.waqi.info/feed/here/?token=${process.env.REACT_APP_AQI_API_KEY}`
      );
      if (res.data.status === "ok") {
        setAqiData(res.data.data);
      } else {
        console.warn("AQI API returned error:", res.data.data);
        setAqiData(null);
      }
    } catch (err) {
      console.error("Failed to fetch AQI data:", err);
    }
  };

  const requestUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(coords);
        fetchWeather(coords.lat, coords.lng);
      },
      () => {
        console.warn("Geolocation denied or unavailable, using default.");
        fetchWeather(defaultCenter.lat, defaultCenter.lng);
      }
    );
  };

  useEffect(() => {
    requestUserLocation();
    fetchAQI();
  }, []);

  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 mb-8">
          Real-Time Urban Data Dashboard
        </h2>

        {/* Weather */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2">
            Weather in {userLocation.lat.toFixed(2)}, {userLocation.lng.toFixed(2)}
          </h3>
          {weatherData ? (
            <>
              <p className="text-lg">
                🌡 {weatherData.main.temp}°F, {weatherData.weather[0].description}
              </p>
              <h4 className="mt-4 font-semibold">5-Day Forecast</h4>
              <ul className="space-y-1 mt-2">
                {forecastData.map((item, idx) => (
                  <li key={idx}>
                    {formatDay(item.dt_txt)}: {item.main.temp}°F,{" "}
                    {item.weather[0].description}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Loading current weather...</p>
          )}
        </div>

        {/* AQI */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2">Air Quality Index</h3>
          {aqiData ? (
            <p>
              AQI: {aqiData.aqi} ({aqiData.dominentpol.toUpperCase()})
            </p>
          ) : (
            <p>Air quality data is currently unavailable.</p>
          )}
        </div>

        {/* Live Google Traffic Map */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2">Live Traffic Map</h3>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={userLocation}
              zoom={12}
            >
              <TrafficLayer />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;
