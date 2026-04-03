import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import { ArrowLeft, CloudRain, Droplets, Bug, AlertTriangle, Bell, CheckCircle } from "lucide-react";

export function Alerts() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const alerts = [
    {
      id: 1,
      type: "rain",
      icon: CloudRain,
      priority: "high",
      title: language === "en" ? "Heavy Rain Warning" : "భారీ వర్షం హెచ్చరిక",
      message: language === "en"
        ? "Heavy rainfall expected in next 48 hours. Ensure proper drainage in fields."
        : "వచ్చే 48 గంటల్లో భారీ వర్షపాతం అంచనా. పొలాల్లో సరైన డ్రైనేజీని నిర్ధారించండి.",
      time: language === "en" ? "2 hours ago" : "2 గంటల క్రితం",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      type: "irrigation",
      icon: Droplets,
      priority: "medium",
      title: language === "en" ? "Irrigation Alert" : "నీటిపారుదల హెచ్చరిక",
      message: language === "en"
        ? "Soil moisture levels are low. Water your crops in the evening for best results."
        : "నేల తేమ స్థాయిలు తక్కువగా ఉన్నాయి. ఉత్తమ ఫలితాల కోసం సాయంత్రం మీ పంటలకు నీరు పోయండి.",
      time: language === "en" ? "5 hours ago" : "5 గంటల క్రితం",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-500",
      iconColor: "text-cyan-600",
    },
    {
      id: 3,
      type: "pest",
      icon: Bug,
      priority: "high",
      title: language === "en" ? "Pest Alert" : "తెగులు హెచ్చరిక",
      message: language === "en"
        ? "Aphid infestation reported in nearby farms. Inspect your crops and apply neem spray if needed."
        : "సమీప పొలాల్లో అఫిడ్ ముట్టడి నివేదించబడింది. మీ పంటలను తనిఖీ చేయండి మరియు అవసరమైతే నిమ్మ స్ప్రే వర్తించండి.",
      time: language === "en" ? "1 day ago" : "1 రోజు క్రితం",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconColor: "text-red-600",
    },
    {
      id: 4,
      type: "temperature",
      icon: AlertTriangle,
      priority: "medium",
      title: language === "en" ? "Temperature Alert" : "ఉష్ణోగ్రత హెచ్చరిక",
      message: language === "en"
        ? "High temperature (35°C+) expected tomorrow. Protect young plants with shade nets."
        : "రేపు అధిక ఉష్ణోగ్రత (35°C+) అంచనా. షేడ్ నెట్‌లతో యువ మొక్కలను రక్షించండి.",
      time: language === "en" ? "1 day ago" : "1 రోజు క్రితం",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500",
      iconColor: "text-orange-600",
    },
    {
      id: 5,
      type: "success",
      icon: CheckCircle,
      priority: "low",
      title: language === "en" ? "Weather Update" : "వాతావరణ నవీకరణ",
      message: language === "en"
        ? "Perfect weather conditions for the next 3 days. Good time for harvesting or planting."
        : "వచ్చే 3 రోజులకు అద్భుతమైన వాతావరణ పరిస్థితులు. పంట కోత లేదా నాటడానికి మంచి సమయం.",
      time: language === "en" ? "2 days ago" : "2 రోజుల క్రితం",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      iconColor: "text-green-600",
    },
  ];

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
          <h1 className="text-3xl sm:text-4xl text-green-800 flex items-center gap-3">
            <Bell className="w-10 h-10" />
            {t("alerts")}
          </h1>
        </div>

        {/* Alert Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-red-100 rounded-xl p-4 text-center">
            <p className="text-3xl text-red-700 mb-1">2</p>
            <p className="text-sm text-red-800">
              {language === "en" ? "High Priority" : "అధిక ప్రాధాన్యత"}
            </p>
          </div>
          <div className="bg-orange-100 rounded-xl p-4 text-center">
            <p className="text-3xl text-orange-700 mb-1">2</p>
            <p className="text-sm text-orange-800">
              {language === "en" ? "Medium" : "మధ్యస్థ"}
            </p>
          </div>
          <div className="bg-green-100 rounded-xl p-4 text-center">
            <p className="text-3xl text-green-700 mb-1">1</p>
            <p className="text-sm text-green-800">
              {language === "en" ? "Info" : "సమాచారం"}
            </p>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className={`${alert.bgColor} border-l-8 ${alert.borderColor} rounded-xl p-5 sm:p-6 shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${alert.iconColor} flex-shrink-0`}>
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl sm:text-2xl text-gray-900">
                        {alert.title}
                      </h3>
                      {alert.priority === "high" && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {language === "en" ? "URGENT" : "అత్యవసరం"}
                        </span>
                      )}
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 mb-2">
                      {alert.message}
                    </p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notification Settings */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl text-green-800 mb-4">
            {language === "en" ? "Notification Settings" : "నోటిఫికేషన్ సెట్టింగ్‌లు"}
          </h2>
          <div className="space-y-3">
            {[
              { label: language === "en" ? "Rain Alerts" : "వర్షం హెచ్చరికలు", enabled: true },
              { label: language === "en" ? "Pest Alerts" : "తెగులు హెచ్చరికలు", enabled: true },
              { label: language === "en" ? "Irrigation Reminders" : "నీటిపారుదల రిమైండర్లు", enabled: true },
              { label: language === "en" ? "Weather Updates" : "వాతావరణ నవీకరణలు", enabled: false },
            ].map((setting, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <span className="text-lg text-gray-800">{setting.label}</span>
                <button
                  className={`w-16 h-8 rounded-full transition-colors ${
                    setting.enabled ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full transform transition-transform ${
                      setting.enabled ? "translate-x-9" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
