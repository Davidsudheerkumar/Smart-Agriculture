import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import {
  Sprout,
  Cloud,
  BookOpen,
  Bell,
  LayoutDashboard,
  HelpCircle,
  Languages
} from "lucide-react";

export function Home() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    {
      icon: Sprout,
      label: t("getAdvice"),
      path: "/input",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Cloud,
      label: t("weatherInfo"),
      path: "/weather",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: BookOpen,
      label: t("learnFarming"),
      path: "/learning",
      color: "bg-yellow-600 hover:bg-yellow-700"
    },
    {
      icon: Bell,
      label: t("alerts"),
      path: "/alerts",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: LayoutDashboard,
      label: t("dashboard"),
      path: "/dashboard",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: HelpCircle,
      label: t("help"),
      path: "/help",
      color: "bg-teal-600 hover:bg-teal-700"
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sprout className="w-12 h-12 sm:w-16 sm:h-16 text-green-700" strokeWidth={2.5} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-green-800">
              {t("appTitle")}
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-green-700 mb-6">
            {t("tagline")}
          </p>

          {/* Language Selector */}
          <div className="flex items-center justify-center gap-3">
            <Languages className="w-6 h-6 text-green-700" />
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-6 py-3 rounded-lg text-lg transition-all ${
                  language === "en"
                    ? "bg-green-700 text-white"
                    : "bg-white text-green-700 border-2 border-green-700"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("te")}
                className={`px-6 py-3 rounded-lg text-lg transition-all ${
                  language === "te"
                    ? "bg-green-700 text-white"
                    : "bg-white text-green-700 border-2 border-green-700"
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`${item.color} text-white p-6 sm:p-8 rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95`}
              >
                <Icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" strokeWidth={2} />
                <span className="text-xl sm:text-2xl md:text-3xl block">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center bg-white rounded-xl p-6 shadow-md">
          <p className="text-green-800 text-lg sm:text-xl">
            {language === "en"
              ? "📱 Tap any button to get started"
              : "📱 ప్రారంభించడానికి ఏదైనా బటన్ నొక్కండి"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
