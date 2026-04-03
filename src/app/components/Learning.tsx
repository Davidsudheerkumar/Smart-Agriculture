import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import { ArrowLeft, BookOpen, Sprout, Droplets, Bug, Sun, Play, ChevronDown, ChevronUp } from "lucide-react";

export function Learning() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [expandedTip, setExpandedTip] = useState<number | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<string>("rice");

  const farmingTips = [
    {
      id: 1,
      icon: Droplets,
      title: language === "en" ? "Smart Irrigation" : "స్మార్ట్ నీటిపారుదల",
      short: language === "en"
        ? "Water early morning or late evening for best results"
        : "ఉత్తమ ఫలితాల కోసం ఉదయం లేదా సాయంత్రం నీరు పోయండి",
      detailed: language === "en"
        ? "1. Water between 6-8 AM or 5-7 PM\n2. Check soil moisture before watering\n3. Use drip irrigation to save 40% water\n4. Avoid watering during hot afternoon\n5. Water deeply but less frequently"
        : "1. ఉదయం 6-8 లేదా సాయంత్రం 5-7 మధ్య నీరు పోయండి\n2. నీరు పోయడానికి ముందు నేల తేమను తనిఖీ చేయండి\n3. 40% నీటిని ఆదా చేయడానికి డ్రిప్ నీటిపారుదల ఉపయోగించండి\n4. వేడి మధ్యాహ్నం సమయంలో నీరు పోయడం మానండి\n5. లోతుగా కానీ తక్కువ తరచుగా నీరు పోయండి"
    },
    {
      id: 2,
      icon: Sun,
      title: language === "en" ? "Soil Health" : "నేల ఆరోగ్యం",
      short: language === "en"
        ? "Healthy soil means healthy crops"
        : "ఆరోగ్యకరమైన నేల అంటే ఆరోగ్యకరమైన పంటలు",
      detailed: language === "en"
        ? "1. Test soil pH every 6 months\n2. Add organic compost regularly\n3. Practice crop rotation\n4. Avoid over-fertilization\n5. Use mulching to retain moisture"
        : "1. ప్రతి 6 నెలలకు నేల pH పరీక్షించండి\n2. క్రమం తప్పకుండా సేంద్రీయ కంపోస్ట్ జోడించండి\n3. పంట మార్పిడిని అభ్యసించండి\n4. అధిక ఎరువులు వేయడం మానండి\n5. తేమను నిలుపుకోవడానికి మల్చింగ్ ఉపయోగించండి"
    },
    {
      id: 3,
      icon: Bug,
      title: language === "en" ? "Natural Pest Control" : "సహజ తెగులు నియంత్రణ",
      short: language === "en"
        ? "Use organic methods before chemicals"
        : "రసాయనాల ముందు సేంద్రీయ పద్ధతులను ఉపయోగించండి",
      detailed: language === "en"
        ? "1. Use neem oil spray weekly\n2. Plant marigold flowers around crops\n3. Remove infected plants immediately\n4. Use sticky traps for flying insects\n5. Encourage natural predators like ladybugs"
        : "1. వారానికి నిమ్మ నూనె స్ప్రే ఉపయోగించండి\n2. పంటల చుట్టూ బంతి పువ్వులు నాటండి\n3. సోకిన మొక్కలను వెంటనే తొలగించండి\n4. ఎగిరే కీటకాల కోసం స్టికీ ట్రాప్‌లను ఉపయోగించండి\n5. లేడీబగ్స్ వంటి సహజ మాంసాహారులను ప్రోత్సహించండి"
    },
    {
      id: 4,
      icon: Sprout,
      title: language === "en" ? "Seed Selection" : "విత్తన ఎంపిక",
      short: language === "en"
        ? "Choose quality seeds for better yield"
        : "మెరుగైన దిగుబడి కోసం నాణ్యమైన విత్తనాలను ఎంచుకోండి",
      detailed: language === "en"
        ? "1. Buy certified seeds from trusted sources\n2. Check germination rate before sowing\n3. Store seeds in cool, dry place\n4. Use disease-resistant varieties\n5. Treat seeds with bio-fungicides"
        : "1. విశ్వసనీయ మూలాల నుండి ధృవీకరించబడిన విత్తనాలను కొనండి\n2. విత్తడానికి ముందు అంకురోత్పత్తి రేటును తనిఖీ చేయండి\n3. చల్లని, పొడి ప్రదేశంలో విత్తనాలను నిల్వ చేయండి\n4. వ్యాధి నిరోధక రకాలను ఉపయోగించండి\n5. బయో-ఫంగిసైడ్లతో విత్తనాలకు చికిత్స చేయండి"
    },
  ];

  const cropGuidance: Record<string, any> = {
    rice: {
      name: language === "en" ? "Rice" : "వరి",
      steps: language === "en" ? [
        "1. Land Preparation: Plow and puddle the field",
        "2. Seed Selection: Use certified rice seeds",
        "3. Nursery: Raise seedlings for 20-25 days",
        "4. Transplanting: Plant 2-3 seedlings per hill",
        "5. Water Management: Keep 2-3 inches of water",
        "6. Fertilizer: Apply NPK as per soil test",
        "7. Weeding: Remove weeds after 20-25 days",
        "8. Pest Control: Monitor for stem borers",
        "9. Harvesting: Harvest when 80% grains are golden",
      ] : [
        "1. భూమి తయారీ: పొలాన్ని దున్నండి మరియు బురదను చేయండి",
        "2. విత్తన ఎంపిక: ధృవీకరించబడిన వరి విత్తనాలను ఉపయోగించండి",
        "3. నర్సరీ: 20-25 రోజులు మొలకలను పెంచండి",
        "4. నాటడం: ప్రతి కుంటకు 2-3 మొలకలను నాటండి",
        "5. నీటి నిర్వహణ: 2-3 అంగుళాల నీటిని ఉంచండి",
        "6. ఎరువు: నేల పరీక్ష ప్రకారం NPK వర్తించండి",
        "7. కలుపు తీయడం: 20-25 రోజుల తర్వాత కలుపు మొక్కలను తొలగించండి",
        "8. తెగులు నియంత్రణ: కాండము తొల్లి కోసం పర్యవేక్షించండి",
        "9. పంట కోత: 80% ధాన్యాలు బంగారు రంగులో ఉన్నప్పుడు కోత",
      ]
    },
    cotton: {
      name: language === "en" ? "Cotton" : "పత్తి",
      steps: language === "en" ? [
        "1. Soil Preparation: Deep plowing required",
        "2. Sowing: Plant seeds at 45cm spacing",
        "3. Thinning: Keep 1-2 plants per spot",
        "4. Irrigation: Water at critical stages",
        "5. Fertilizers: Apply nitrogen in 3 splits",
        "6. Pest Management: Monitor for bollworms",
        "7. Flowering: Ensure adequate moisture",
        "8. Boll Formation: Protect from pests",
        "9. Harvesting: Pick when bolls open fully",
      ] : [
        "1. నేల తయారీ: లోతైన దున్నుట అవసరం",
        "2. విత్తడం: 45సెం.మీ. అంతరంలో విత్తనాలు నాటండి",
        "3. సన్నబడటం: ప్రతి ప్రదేశంలో 1-2 మొక్కలను ఉంచండి",
        "4. నీటిపారుదల: క్లిష్ట దశల్లో నీరు పోయండి",
        "5. ఎరువులు: నైట్రోజన్‌ను 3 విభజనలలో వర్తించండి",
        "6. తెగులు నిర్వహణ: బోల్‌వార్మ్‌ల కోసం పర్యవేక్షించండి",
        "7. పుష్పించడం: తగినంత తేమను నిర్ధారించండి",
        "8. బోల్ నిర్మాణం: తెగుళ్ళ నుండి రక్షించండి",
        "9. పంట కోత: బోల్స్ పూర్తిగా తెరుచుకున్నప్పుడు తీయండి",
      ]
    },
    wheat: {
      name: language === "en" ? "Wheat" : "గోధుమ",
      steps: language === "en" ? [
        "1. Land Preparation: Fine tilth required",
        "2. Sowing: Use seed drill for uniform spacing",
        "3. Seed Rate: 100kg per hectare",
        "4. Irrigation: First at 21 days after sowing",
        "5. Fertilizers: Apply DAP at sowing time",
        "6. Weed Control: First weeding at 30 days",
        "7. Disease Watch: Monitor for rust diseases",
        "8. Late Irrigation: Stop 10 days before harvest",
        "9. Harvesting: When grains are hard",
      ] : [
        "1. భూమి తయారీ: చక్కటి నేల అవసరం",
        "2. విత్తడం: ఏకరీతి అంతరం కోసం సీడ్ డ్రిల్ ఉపయోగించండి",
        "3. విత్తన రేటు: హెక్టారుకు 100కేజీ",
        "4. నీటిపారుదల: విత్తడం తర్వాత 21 రోజుల్లో మొదటిది",
        "5. ఎరువులు: విత్తడం సమయంలో DAP వర్తించండి",
        "6. కలుపు నియంత్రణ: 30 రోజుల్లో మొదటి కలుపు తీయడం",
        "7. వ్యాధి పర్యవేక్షణ: తుప్పు వ్యాధుల కోసం పర్యవేక్షించండి",
        "8. చివరి నీటిపారుదల: పంట కోతకు 10 రోజుల ముందు ఆపండి",
        "9. పంట కోత: ధాన్యాలు గట్టిగా ఉన్నప్పుడు",
      ]
    },
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
          <h1 className="text-3xl sm:text-4xl text-green-800 flex items-center gap-3">
            <BookOpen className="w-10 h-10" />
            {t("learning")}
          </h1>
        </div>

        {/* Basic Farming Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl text-green-800 mb-4">{t("farmingTips")}</h2>
          <div className="space-y-3">
            {farmingTips.map((tip) => {
              const Icon = tip.icon;
              const isExpanded = expandedTip === tip.id;
              return (
                <div key={tip.id} className="border-2 border-green-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedTip(isExpanded ? null : tip.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8 text-green-600" />
                      <div className="text-left">
                        <h3 className="text-xl text-gray-900">{tip.title}</h3>
                        <p className="text-sm text-gray-600">{tip.short}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-green-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-green-600" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="p-4 bg-green-50 border-t-2 border-green-200">
                      <pre className="text-base text-gray-700 whitespace-pre-wrap font-sans">
                        {tip.detailed}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Crop-wise Guidance */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl text-green-800 mb-4">{t("cropGuidance")}</h2>

          {/* Crop Selector */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {Object.keys(cropGuidance).map((crop) => (
              <button
                key={crop}
                onClick={() => setSelectedCrop(crop)}
                className={`px-6 py-3 rounded-xl text-lg transition-all ${
                  selectedCrop === crop
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cropGuidance[crop].name}
              </button>
            ))}
          </div>

          {/* Crop Steps */}
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl text-green-800 mb-4 flex items-center gap-2">
              <Sprout className="w-6 h-6" />
              {language === "en" ? "Step-by-Step Guide" : "దశల వారీ మార్గదర్శకం"}
            </h3>
            <div className="space-y-3">
              {cropGuidance[selectedCrop].steps.map((step: string, index: number) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-base sm:text-lg text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Tutorials Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl text-green-800 mb-4">
            {language === "en" ? "Video Tutorials" : "వీడియో ట్యుటోరియల్స్"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: language === "en" ? "Drip Irrigation Setup" : "డ్రిప్ నీటిపారుదల అమరిక", duration: "10:30" },
              { title: language === "en" ? "Organic Pest Control" : "సేంద్రీయ తెగులు నియంత్రణ", duration: "8:15" },
              { title: language === "en" ? "Composting at Home" : "ఇంట్లో కంపోస్టింగ్", duration: "12:00" },
              { title: language === "en" ? "Soil Testing Guide" : "నేల పరీక్ష మార్గదర్శి", duration: "6:45" },
            ].map((video, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 hover:bg-gray-200 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 rounded-full p-3">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
