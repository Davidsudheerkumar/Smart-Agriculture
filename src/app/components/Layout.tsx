import { Outlet } from "react-router";
import { createContext, useState, useContext } from "react";

type Language = "en" | "te";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Common
  home: { en: "Home", te: "హోమ్" },
  back: { en: "Back", te: "వెనక్కి" },
  submit: { en: "Submit", te: "సబ్మిట్" },

  // Home page
  appTitle: { en: "Smart Agriculture", te: "స్మార్ట్ వ్యవసాయం" },
  tagline: { en: "Smart Farming Made Easy", te: "వ్యవసాయాన్ని సులభతరం చేసిన స్మార్ట్ సాంకేతికత" },
  getAdvice: { en: "Get Advice", te: "సలహా పొందండి" },
  weatherInfo: { en: "Weather Info", te: "వాతావరణ సమాచారం" },
  learnFarming: { en: "Learn Farming", te: "వ్యవసాయం నేర్చుకోండి" },
  alerts: { en: "Alerts", te: "హెచ్చరికలు" },
  dashboard: { en: "Dashboard", te: "డాష్‌బోర్డ్" },
  help: { en: "Help & Support", te: "సహాయం మరియు మద్దతు" },

  // Input form
  farmerInput: { en: "Farmer Input Form", te: "రైతు ఇన్‌పుట్ ఫారం" },
  soilType: { en: "Soil Type", te: "నేల రకం" },
  cropType: { en: "Crop Type", te: "పంట రకం" },
  location: { en: "Location", te: "స్థానం" },
  waterAvailability: { en: "Water Availability", te: "నీటి అందుబాటు" },
  season: { en: "Season", te: "సీజన్" },

  // Soil types
  clayey: { en: "Clayey", te: "బంకమట్టి" },
  sandy: { en: "Sandy", te: "ఇసుక" },
  loamy: { en: "Loamy", te: "మట్టి మిశ్రమం" },
  blackSoil: { en: "Black Soil", te: "నల్ల మట్టి" },
  redSoil: { en: "Red Soil", te: "ఎరుపు మట్టి" },

  // Crops
  rice: { en: "Rice", te: "వరి" },
  wheat: { en: "Wheat", te: "గోధుమ" },
  cotton: { en: "Cotton", te: "పత్తి" },
  sugarcane: { en: "Sugarcane", te: "చెరకు" },
  vegetables: { en: "Vegetables", te: "కూరగాయలు" },

  // Water levels
  low: { en: "Low", te: "తక్కువ" },
  medium: { en: "Medium", te: "మధ్యస్థ" },
  high: { en: "High", te: "ఎక్కువ" },

  // Seasons
  summer: { en: "Summer", te: "వేసవి" },
  monsoon: { en: "Monsoon", te: "వానాకాలం" },
  winter: { en: "Winter", te: "శీతాకాలం" },

  // Recommendations
  recommendations: { en: "Smart Recommendations", te: "స్మార్ట్ సిఫార్సులు" },
  irrigationAdvice: { en: "Irrigation Advice", te: "నీటిపారుదల సలహా" },
  cropSuggestions: { en: "Crop Suggestions", te: "పంట సూచనలు" },
  fertilizerRec: { en: "Fertilizer Recommendations", te: "ఎరువుల సిఫార్సులు" },
  pestControl: { en: "Pest Control Tips", te: "తెగుళ్ళ నియంత్రణ చిట్కాలు" },

  // Weather
  weather: { en: "Weather Information", te: "వాతావరణ సమాచారం" },
  temperature: { en: "Temperature", te: "ఉష్ణోగ్రత" },
  humidity: { en: "Humidity", te: "తేమ" },
  rainForecast: { en: "Rain Forecast", te: "వర్షం అంచనా" },
  weatherAlerts: { en: "Weather Alerts", te: "వాతావరణ హెచ్చరికలు" },

  // Learning
  learning: { en: "Learning Section", te: "నేర్చుకోవడం విభాగం" },
  farmingTips: { en: "Basic Farming Tips", te: "ప్రాథమిక వ్యవసాయ చిట్కాలు" },
  cropGuidance: { en: "Crop-wise Guidance", te: "పంట ప్రకారం మార్గదర్శకత్వం" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function Layout() {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <Outlet />
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within Layout");
  }
  return context;
}
