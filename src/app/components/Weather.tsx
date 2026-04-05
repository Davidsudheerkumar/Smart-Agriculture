import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Thermometer,
  Droplets,
  Cloud,
  CloudRain,
  Sun,
  Wind,
  AlertTriangle,
} from "lucide-react";

export function Weather() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  // ✅ Dynamic Date
  const today = new Date();
  const formattedDate =
    language === "en"
      ? today.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : today.toLocaleDateString("te-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

  // ✅ Random Weather Generator
  const getRandomWeather = () => ({
    temperature: Math.floor(Math.random() * 10) + 28,
    humidity: Math.floor(Math.random() * 40) + 40,
    windSpeed: Math.floor(Math.random() * 15) + 5,
    rainChance: Math.floor(Math.random() * 100),
    forecast: [
      { day: language === "en" ? "Today" : "నేడు", icon: Sun, temp: Math.floor(Math.random() * 10) + 28, rain: Math.floor(Math.random() * 50) },
      { day: language === "en" ? "Tomorrow" : "రేపు", icon: Cloud, temp: Math.floor(Math.random() * 10) + 27, rain: Math.floor(Math.random() * 70) },
      { day: language === "en" ? "Day 3" : "3వ రోజు", icon: CloudRain, temp: Math.floor(Math.random() * 10) + 26, rain: Math.floor(Math.random() * 100) },
      { day: language === "en" ? "Day 4" : "4వ రోజు", icon: CloudRain, temp: Math.floor(Math.random() * 10) + 25, rain: Math.floor(Math.random() * 100) },
      { day: language === "en" ? "Day 5" : "5వ రోజు", icon: Cloud, temp: Math.floor(Math.random() * 10) + 27, rain: Math.floor(Math.random() * 80) },
    ],
    alerts: [
      {
        message:
          language === "en"
            ? "Weather fluctuating. Monitor crops regularly."
            : "వాతావరణం మారుతోంది. పంటలను పరిశీలించండి.",
      },
      {
        message:
          language === "en"
            ? "Possible rain in coming days."
            : "వచ్చే రోజుల్లో వర్షం అవకాశం ఉంది.",
      },
    ],
  });

  // ✅ State
  const [weatherData, setWeatherData] = useState(getRandomWeather());

  // ✅ Auto-refresh random data every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherData(getRandomWeather());
    }, 10000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-white p-3 rounded-xl shadow-md hover:bg-gray-50"
          >
            <ArrowLeft className="w-8 h-8 text-green-700" />
          </button>
          <h1 className="text-3xl sm:text-4xl text-green-800">
            {t("weather")}
          </h1>
        </div>

        {/* Current Weather */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg p-6 sm:p-8 mb-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xl opacity-90">
                {language === "en"
                  ? "Current Weather"
                  : "ప్రస్తుత వాతావరణం"}
              </p>
              <p className="text-lg opacity-75">{formattedDate}</p>
            </div>
            <Sun className="w-16 h-16" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-xl p-4">
              <Thermometer className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">
                {weatherData.temperature}°C
              </p>
              <p className="text-sm opacity-90">{t("temperature")}</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <Droplets className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">
                {weatherData.humidity}%
              </p>
              <p className="text-sm opacity-90">{t("humidity")}</p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <Wind className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">
                {weatherData.windSpeed} km/h
              </p>
              <p className="text-sm opacity-90">
                {language === "en" ? "Wind" : "గాలి"}
              </p>
            </div>

            <div className="bg-white/20 rounded-xl p-4">
              <CloudRain className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">
                {weatherData.rainChance}%
              </p>
              <p className="text-sm opacity-90">
                {language === "en" ? "Rain" : "వర్షం"}
              </p>
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl text-green-800 mb-4 flex items-center gap-2">
            <Cloud className="w-8 h-8" />
            {t("rainForecast")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {weatherData.forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                >
                  <p className="text-lg text-gray-700 mb-2">
                    {day.day}
                  </p>
                  <Icon className="w-10 h-10 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl text-gray-800 mb-1">
                    {day.temp}°C
                  </p>
                  <div className="flex items-center justify-center gap-1 text-blue-600">
                    <Droplets className="w-4 h-4" />
                    <span className="text-sm">{day.rain}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl text-green-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
            {t("weatherAlerts")}
          </h2>

          <div className="space-y-3">
            {weatherData.alerts.map((alert, index) => (
              <div
                key={index}
                className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mt-1" />
                  <p className="text-lg text-gray-800">
                    {alert.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-2xl p-6">
          <h3 className="text-xl text-green-800 mb-3">
            {language === "en"
              ? "💡 Farming Tips for Today"
              : "💡 నేటి వ్యవసాయ చిట్కాలు"}
          </h3>

          <ul className="space-y-2 text-lg text-gray-700">
            <li>
              •{" "}
              {language === "en"
                ? "Check weather daily due to fluctuations"
                : "వాతావరణ మార్పుల కారణంగా రోజూ పరిశీలించండి"}
            </li>
            <li>
              •{" "}
              {language === "en"
                ? "Adjust irrigation based on rainfall"
                : "వర్షపాతం ఆధారంగా నీటిని నియంత్రించండి"}
            </li>
            <li>
              •{" "}
              {language === "en"
                ? "Protect crops during heavy rain alerts"
                : "భారీ వర్షంలో పంటలను రక్షించండి"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
