import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import { ArrowLeft, Thermometer, Droplets, Cloud, CloudRain, Sun, Wind, AlertTriangle } from "lucide-react";

export function Weather() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  // Mock weather data - in a real app, this would come from an API
  const weatherData = {
    temperature: 32,
    humidity: 65,
    windSpeed: 12,
    rainChance: 40,
    forecast: [
      { day: language === "en" ? "Today" : "నేడు", icon: Sun, temp: 32, rain: 10 },
      { day: language === "en" ? "Tomorrow" : "రేపు", icon: Cloud, temp: 30, rain: 40 },
      { day: language === "en" ? "Day 3" : "3వ రోజు", icon: CloudRain, temp: 28, rain: 70 },
      { day: language === "en" ? "Day 4" : "4వ రోజు", icon: CloudRain, temp: 27, rain: 80 },
      { day: language === "en" ? "Day 5" : "5వ రోజు", icon: Cloud, temp: 29, rain: 30 },
    ],
    alerts: [
      {
        type: "rain",
        message: language === "en"
          ? "Heavy rain expected in 2 days. Prepare drainage."
          : "2 రోజుల్లో భారీ వర్షం అంచనా. డ్రైనేజీని సిద్ధం చేయండి."
      },
      {
        type: "temperature",
        message: language === "en"
          ? "High temperature today. Ensure adequate water for crops."
          : "నేడు అధిక ఉష్ణోగ్రత. పంటలకు తగిన నీరు నిర్ధారించండి."
      },
    ],
  };

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
                {language === "en" ? "Current Weather" : "ప్రస్తుత వాతావరణం"}
              </p>
              <p className="text-lg opacity-75">
                {language === "en" ? "April 2, 2026" : "ఏప్రిల్ 2, 2026"}
              </p>
            </div>
            <Sun className="w-16 h-16" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-xl p-4">
              <Thermometer className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">{weatherData.temperature}°C</p>
              <p className="text-sm opacity-90">{t("temperature")}</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <Droplets className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">{weatherData.humidity}%</p>
              <p className="text-sm opacity-90">{t("humidity")}</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <Wind className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">{weatherData.windSpeed} km/h</p>
              <p className="text-sm opacity-90">
                {language === "en" ? "Wind" : "గాలి"}
              </p>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <CloudRain className="w-8 h-8 mb-2" />
              <p className="text-3xl mb-1">{weatherData.rainChance}%</p>
              <p className="text-sm opacity-90">
                {language === "en" ? "Rain" : "వర్షం"}
              </p>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl text-green-800 mb-4 flex items-center gap-2">
            <Cloud className="w-8 h-8" />
            {t("rainForecast")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {weatherData.forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-lg text-gray-700 mb-2">{day.day}</p>
                  <Icon className="w-10 h-10 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl text-gray-800 mb-1">{day.temp}°C</p>
                  <div className="flex items-center justify-center gap-1 text-blue-600">
                    <Droplets className="w-4 h-4" />
                    <span className="text-sm">{day.rain}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weather Alerts */}
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
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-800">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Farming Tips Based on Weather */}
        <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-2xl p-6">
          <h3 className="text-xl text-green-800 mb-3">
            {language === "en" ? "💡 Farming Tips for Today" : "💡 నేటి వ్యవసాయ చిట్కాలు"}
          </h3>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>• {language === "en"
              ? "High temperature - Water crops early morning or evening"
              : "అధిక ఉష్ణోగ్రత - ఉదయం లేదా సాయంత్రం పంటలకు నీరు పోయండి"
            }</li>
            <li>• {language === "en"
              ? "Rain expected - Postpone fertilizer application"
              : "వర్షం అంచనా - ఎరువుల వర్తింపును వాయిదా వేయండి"
            }</li>
            <li>• {language === "en"
              ? "Good humidity - Ideal for plant growth"
              : "మంచి తేమ - మొక్కల పెరుగుదలకు అనువైనది"
            }</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
