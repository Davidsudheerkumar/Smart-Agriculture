import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import { ArrowLeft, Droplets, Sprout, Boxes, Bug, CheckCircle2, XCircle } from "lucide-react";

interface FarmerData {
  soilType: string;
  cropType: string;
  location: string;
  waterAvailability: string;
  season: string;
}

export function Recommendations() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [farmerData, setFarmerData] = useState<FarmerData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("farmerInputData");
    if (data) {
      setFarmerData(JSON.parse(data));
    }
  }, []);

  if (!farmerData) {
    return (
      <div className="min-h-screen p-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-green-800 mb-6">
            {language === "en" ? "No data found. Please fill the form first." : "డేటా కనుగొనబడలేదు. దయచేసి మొదట ఫారమ్ పూరించండి."}
          </p>
          <button
            onClick={() => navigate("/input")}
            className="bg-green-600 text-white px-8 py-4 rounded-xl text-xl"
          >
            {language === "en" ? "Go to Form" : "ఫారం వద్దకు వెళ్ళండి"}
          </button>
        </div>
      </div>
    );
  }

  // Generate recommendations based on input
  const getIrrigationAdvice = () => {
    if (farmerData.waterAvailability === "low" && farmerData.season === "summer") {
      return {
        shouldWater: true,
        advice: language === "en"
          ? "Water your crops immediately. Use drip irrigation to save water."
          : "మీ పంటలకు వెంటనే నీరు పోయండి. నీటిని ఆదా చేయడానికి డ్రిప్ నీటిపారుదల ఉపయోగించండి."
      };
    } else if (farmerData.season === "monsoon") {
      return {
        shouldWater: false,
        advice: language === "en"
          ? "No irrigation needed. Monsoon provides enough water."
          : "నీటిపారుదల అవసరం లేదు. వానాకాలం తగినంత నీటిని అందిస్తుంది."
      };
    } else if (farmerData.waterAvailability === "high") {
      return {
        shouldWater: false,
        advice: language === "en"
          ? "Water level is good. Monitor and water only when needed."
          : "నీటి స్థాయి మంచిది. అవసరమైనప్పుడు మాత్రమే పర్యవేక్షించండి మరియు నీటిపారుదల చేయండి."
      };
    }
    return {
      shouldWater: true,
      advice: language === "en"
        ? "Regular irrigation recommended for optimal growth."
        : "సరైన పెరుగుదల కోసం క్రమం తప్పకుండా నీటిపారుదల సిఫార్సు చేయబడింది."
    };
  };

  const getCropSuggestions = () => {
    const suggestions: Record<string, string> = {
      en: {
        rice: "Rice grows well in clayey soil with high water availability during monsoon.",
        wheat: "Wheat is best for winter season in loamy or black soil.",
        cotton: "Cotton thrives in black soil with moderate water in summer.",
        sugarcane: "Sugarcane needs high water and grows well in all seasons.",
        vegetables: "Vegetables can grow in any soil with regular water supply.",
      },
      te: {
        rice: "వరి మట్టి నేలలో వానాకాలంలో ఎక్కువ నీటితో బాగా పెరుగుతుంది.",
        wheat: "మట్టి మిశ్రమం లేదా నల్ల మట్టిలో శీతాకాలంలో గోధుమ ఉత్తమం.",
        cotton: "నల్ల మట్టిలో వేసవిలో మితమైన నీటితో పత్తి వర్ధిల్లుతుంది.",
        sugarcane: "చెరకుకు ఎక్కువ నీరు అవసరం మరియు అన్ని సీజన్లలో బాగా పెరుగుతుంది.",
        vegetables: "కూరగాయలు క్రమం తప్పకుండా నీటి సరఫరాతో ఏ నేలలోనైనా పెరుగుతాయి.",
      },
    };
    return suggestions[language][farmerData.cropType] || (language === "en" ? "Good choice for your region." : "మీ ప్రాంతానికి మంచి ఎంపిక.");
  };

  const getFertilizerRec = () => {
    const recommendations: Record<string, string> = {
      en: {
        rice: "Use Urea (50kg/acre), DAP (25kg/acre), and Potash (12kg/acre).",
        wheat: "Apply Urea (40kg/acre), DAP (30kg/acre) before sowing.",
        cotton: "Use complex fertilizer NPK 10:26:26 and Urea as needed.",
        sugarcane: "Apply NPK fertilizer and organic manure for best results.",
        vegetables: "Use organic compost and balanced NPK fertilizer.",
      },
      te: {
        rice: "యూరియా (50కేజీ/ఎకరా), DAP (25కేజీ/ఎకరా), మరియు పొటాష్ (12కేజీ/ఎకరా) ఉపయోగించండి.",
        wheat: "విత్తడానికి ముందు యూరియా (40కేజీ/ఎకరా), DAP (30కేజీ/ఎకరా) వర్తించండి.",
        cotton: "సంక్లిష్ట ఎరువు NPK 10:26:26 మరియు అవసరమైనప్పుడు యూరియా ఉపయోగించండి.",
        sugarcane: "ఉత్తమ ఫలితాల కోసం NPK ఎరువు మరియు సేంద్రీయ ఎరువు వర్తించండి.",
        vegetables: "సేంద్రీయ కంపోస్ట్ మరియు సమతుల్య NPK ఎరువు ఉపయోగించండి.",
      },
    };
    return recommendations[language][farmerData.cropType] || (language === "en" ? "Consult local agriculture expert." : "స్థానిక వ్యవసాయ నిపుణుడిని సంప్రదించండి.");
  };

  const getPestControl = () => {
    const tips: Record<string, string> = {
      en: {
        rice: "Watch for stem borers and leaf folders. Use neem oil spray as prevention.",
        wheat: "Monitor for aphids and rust disease. Apply appropriate pesticides if needed.",
        cotton: "Check for bollworms regularly. Use pheromone traps for early detection.",
        sugarcane: "Look for shoot borers. Remove affected plants immediately.",
        vegetables: "Use neem-based organic pesticides. Avoid chemical sprays near harvest.",
      },
      te: {
        rice: "కాండము తొల్లి మరియు ఆకు మడతల కోసం చూడండి. నివారణగా నిమ్మ నూనె స్ప్రే ఉపయోగించండి.",
        wheat: "అఫిడ్స్ మరియు తుప్పు వ్యాధి కోసం పర్యవేక్షించండి. అవసరమైతే తగిన పురుగుమందులు వర్తించండి.",
        cotton: "బోల్‌వార్మ్‌ల కోసం క్రమం తప్పకుండా తనిఖీ చేయండి. ముందస్తు గుర్తింపు కోసం ఫెరోమోన్ ట్రాప్‌లను ఉపయోగించండి.",
        sugarcane: "చిగురు తొల్లి కోసం చూడండి. ప్రభావిత మొక్కలను వెంటనే తొలగించండి.",
        vegetables: "నిమ్మ ఆధారిత సేంద్రీయ పురుగుమందులను ఉపయోగించండి. పంట సమయానికి సమీపంలో రసాయన స్ప్రేలను నివారించండి.",
      },
    };
    return tips[language][farmerData.cropType] || (language === "en" ? "Regular field monitoring is key." : "క్రమం తప్పకుండా పొలం పర్యవేక్షణ కీలకం.");
  };

  const irrigation = getIrrigationAdvice();

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
            {t("recommendations")}
          </h1>
        </div>

        {/* Recommendations Cards */}
        <div className="space-y-4">
          {/* Irrigation Advice */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-10 h-10 text-blue-600" />
              <h2 className="text-2xl text-green-800">{t("irrigationAdvice")}</h2>
            </div>
            <div className="flex items-center gap-4 mb-3">
              {irrigation.shouldWater ? (
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                  <Droplets className="w-6 h-6 text-blue-600" />
                  <span className="text-xl text-blue-800">
                    {language === "en" ? "Water Needed" : "నీరు అవసరం"}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <span className="text-xl text-green-800">
                    {language === "en" ? "No Water Needed" : "నీరు అవసరం లేదు"}
                  </span>
                </div>
              )}
            </div>
            <p className="text-lg text-gray-700">{irrigation.advice}</p>
          </div>

          {/* Crop Suggestions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sprout className="w-10 h-10 text-green-600" />
              <h2 className="text-2xl text-green-800">{t("cropSuggestions")}</h2>
            </div>
            <p className="text-lg text-gray-700">{getCropSuggestions()}</p>
          </div>

          {/* Fertilizer Recommendations */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Boxes className="w-10 h-10 text-yellow-600" />
              <h2 className="text-2xl text-green-800">{t("fertilizerRec")}</h2>
            </div>
            <p className="text-lg text-gray-700">{getFertilizerRec()}</p>
          </div>

          {/* Pest Control Tips */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bug className="w-10 h-10 text-red-600" />
              <h2 className="text-2xl text-green-800">{t("pestControl")}</h2>
            </div>
            <p className="text-lg text-gray-700">{getPestControl()}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/input")}
            className="bg-white border-4 border-green-600 text-green-700 py-4 text-xl rounded-xl shadow-lg hover:bg-green-50"
          >
            {language === "en" ? "Update Info" : "సమాచారాన్ని అప్‌డేట్ చేయండి"}
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 text-white py-4 text-xl rounded-xl shadow-lg hover:bg-green-700"
          >
            {t("home")}
          </button>
        </div>
      </div>
    </div>
  );
}
