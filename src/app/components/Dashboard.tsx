import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import {
  ArrowLeft,
  Thermometer,
  Droplets,
  Cloud,
  Bell,
  Sprout,
  TrendingUp,
  Calendar,
  MapPin,
} from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Get farmer data if available
  const farmerDataStr = localStorage.getItem("farmerInputData");
  const farmerData = farmerDataStr ? JSON.parse(farmerDataStr) : null;

  // Mock data
  const weatherData = {
    temperature: 32,
    humidity: 65,
    condition: language === "en" ? "Sunny" : "ఎండ",
    rainChance: 40,
  };

  const todayTasks = [
    {
      task: language === "en" ? "Water the crops in the evening" : "సాయంత్రం పంటలకు నీరు పోయండి",
      priority: "high",
      time: "5:00 PM",
    },
    {
      task: language === "en" ? "Check for pest infestation" : "తెగులు ముట్టడి కోసం తనిఖీ చేయండి",
      priority: "medium",
      time: "Morning",
    },
    {
      task: language === "en" ? "Apply fertilizer if needed" : "అవసరమైతే ఎరువు వర్తించండి",
      priority: "low",
      time: "Anytime",
    },
  ];

  const cropStatus = {
    growth: 75,
    health: 85,
    daysToHarvest: farmerData?.cropType === "rice" ? 45 : 60,
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-white p-3 rounded-xl shadow-md hover:bg-gray-50"
          >
            <ArrowLeft className="w-8 h-8 text-green-700" />
          </button>
          <h1 className="text-3xl sm:text-4xl text-green-800">
            {language === "en" ? "Dashboard" : "డాష్‌బోర్డ్"}
          </h1>
        </div>

        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-lg p-6 sm:p-8 mb-6 text-white">
          <h2 className="text-2xl sm:text-3xl mb-2">
            {language === "en" ? "Welcome, Farmer!" : "స్వాగతం, రైతు!"}
          </h2>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Here's your farming summary for today"
              : "నేటి కోసం మీ వ్యవసాయ సారాంశం ఇక్కడ ఉంది"}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Calendar className="w-5 h-5" />
            <span>{language === "en" ? "April 2, 2026" : "ఏప్రిల్ 2, 2026"}</span>
          </div>
          {farmerData && (
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="w-5 h-5" />
              <span>{farmerData.location}</span>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-md text-center">
            <Thermometer className="w-10 h-10 mx-auto mb-2 text-orange-600" />
            <p className="text-3xl text-gray-900 mb-1">{weatherData.temperature}°C</p>
            <p className="text-sm text-gray-600">
              {language === "en" ? "Temperature" : "ఉష్ణోగ్రత"}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md text-center">
            <Droplets className="w-10 h-10 mx-auto mb-2 text-blue-600" />
            <p className="text-3xl text-gray-900 mb-1">{weatherData.humidity}%</p>
            <p className="text-sm text-gray-600">
              {language === "en" ? "Humidity" : "తేమ"}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md text-center">
            <Cloud className="w-10 h-10 mx-auto mb-2 text-gray-600" />
            <p className="text-3xl text-gray-900 mb-1">{weatherData.rainChance}%</p>
            <p className="text-sm text-gray-600">
              {language === "en" ? "Rain Chance" : "వర్షం అవకాశం"}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md text-center">
            <Bell className="w-10 h-10 mx-auto mb-2 text-red-600" />
            <p className="text-3xl text-gray-900 mb-1">3</p>
            <p className="text-sm text-gray-600">
              {language === "en" ? "Active Alerts" : "క్రియాశీల హెచ్చరికలు"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Crop Status */}
            {farmerData && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl text-green-800 mb-4 flex items-center gap-2">
                  <Sprout className="w-8 h-8" />
                  {language === "en" ? "Crop Status" : "పంట స్థితి"}
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">
                        {language === "en" ? "Growth Progress" : "పెరుగుదల పురోగతి"}
                      </span>
                      <span className="text-green-700">{cropStatus.growth}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full"
                        style={{ width: `${cropStatus.growth}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">
                        {language === "en" ? "Plant Health" : "మొక్క ఆరోగ్యం"}
                      </span>
                      <span className="text-green-700">{cropStatus.health}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: `${cropStatus.health}%` }}
                      />
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 mt-4">
                    <p className="text-lg text-green-800">
                      <span className="block text-3xl mb-1">{cropStatus.daysToHarvest}</span>
                      {language === "en" ? "Days to Harvest" : "పంట కోతకు రోజులు"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Today's Tasks */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl text-green-800 mb-4">
                {language === "en" ? "Today's Tasks" : "నేటి పనులు"}
              </h2>
              <div className="space-y-3">
                {todayTasks.map((item, index) => (
                  <div
                    key={index}
                    className={`border-l-4 ${
                      item.priority === "high"
                        ? "border-red-500 bg-red-50"
                        : item.priority === "medium"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-green-500 bg-green-50"
                    } rounded-lg p-4`}
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-base text-gray-800 flex-1">{item.task}</p>
                      <span className="text-sm text-gray-600 ml-2">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl text-green-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-8 h-8" />
                {language === "en" ? "Quick Recommendations" : "త్వరిత సిఫార్సులు"}
              </h2>
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                  <p className="text-lg text-gray-800">
                    {language === "en"
                      ? "💧 Irrigate crops in evening due to high temperature"
                      : "💧 అధిక ఉష్ణోగ్రత కారణంగా సాయంత్రం పంటలకు నీరు పోయండి"}
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <p className="text-lg text-gray-800">
                    {language === "en"
                      ? "🌱 Apply NPK fertilizer for optimal growth"
                      : "🌱 సరైన పెరుగుదల కోసం NPK ఎరువు వర్తించండి"}
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                  <p className="text-lg text-gray-800">
                    {language === "en"
                      ? "🐛 Monitor for pests - spray neem if needed"
                      : "🐛 తెగుళ్ళ కోసం పర్యవేక్షించండి - అవసరమైతే నిమ్మ స్ప్రే చేయండి"}
                  </p>
                </div>
              </div>
            </div>

            {/* Weather Summary */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-2xl mb-4">
                {language === "en" ? "Weather Summary" : "వాతావరణ సారాంశం"}
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-5xl mb-2">{weatherData.temperature}°C</p>
                  <p className="text-xl opacity-90">{weatherData.condition}</p>
                </div>
                <Cloud className="w-20 h-20 opacity-80" />
              </div>
              <div className="mt-4 pt-4 border-t border-white/30">
                <p className="text-lg">
                  {language === "en"
                    ? "Next 2 days: Rain expected"
                    : "వచ్చే 2 రోజులు: వర్షం అంచనా"}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl text-green-800 mb-4">
                {language === "en" ? "Quick Actions" : "త్వరిత చర్యలు"}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => navigate("/input")}
                  className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors"
                >
                  {language === "en" ? "Update Info" : "సమాచారాన్ని అప్‌డేట్ చేయండి"}
                </button>
                <button
                  onClick={() => navigate("/weather")}
                  className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  {language === "en" ? "Weather" : "వాతావరణం"}
                </button>
                <button
                  onClick={() => navigate("/learning")}
                  className="bg-yellow-600 text-white p-4 rounded-xl hover:bg-yellow-700 transition-colors"
                >
                  {language === "en" ? "Learn" : "నేర్చుకోండి"}
                </button>
                <button
                  onClick={() => navigate("/help")}
                  className="bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700 transition-colors"
                >
                  {language === "en" ? "Help" : "సహాయం"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Tip */}
        <div className="mt-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-2xl mb-3">
            {language === "en" ? "💡 Daily Farming Tip" : "💡 రోజువారీ వ్యవసాయ చిట్కా"}
          </h3>
          <p className="text-lg">
            {language === "en"
              ? "Mulching helps retain soil moisture and reduces weed growth. Use dried leaves or straw around your plants."
              : "మల్చింగ్ నేల తేమను నిలుపుకోవడానికి మరియు కలుపు పెరుగుదలను తగ్గించడానికి సహాయపడుతుంది. మీ మొక్కల చుట్టూ ఎండిన ఆకులు లేదా గడ్డిని ఉపయోగించండి."}
          </p>
        </div>
      </div>
    </div>
  );
}
