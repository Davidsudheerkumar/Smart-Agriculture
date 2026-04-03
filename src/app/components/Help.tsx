import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import { ArrowLeft, HelpCircle, Phone, Mail, MessageCircle, ChevronDown, ChevronUp, Send } from "lucide-react";

export function Help() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; message: string }>>([
    {
      sender: "bot",
      message: language === "en"
        ? "Hello! I'm your farming assistant. How can I help you today?"
        : "నమస్కారం! నేను మీ వ్యవసాయ సహాయకుడను. నేడు నేను మీకు ఎలా సహాయం చేయగలను?"
    }
  ]);

  const faqs = [
    {
      id: 1,
      question: language === "en"
        ? "How do I know when to water my crops?"
        : "నా పంటలకు ఎప్పుడు నీరు పోయాలో నేను ఎలా తెలుసుకోవాలి?",
      answer: language === "en"
        ? "Check the soil moisture by inserting your finger 2-3 inches deep. If it feels dry, it's time to water. You can also use our app's recommendation feature that considers weather, soil type, and crop needs to give you personalized irrigation advice."
        : "మీ వేలును 2-3 అంగుళాల లోతుకు చొప్పించి నేల తేమను తనిఖీ చేయండి. ఇది పొడిగా అనిపిస్తే, నీరు పోయడానికి సమయం వచ్చింది. వాతావరణం, నేల రకం మరియు పంట అవసరాలను పరిగణించి మీకు వ్యక్తిగత నీటిపారుదల సలహా ఇవ్వడానికి మా యాప్ యొక్క సిఫార్సు ఫీచర్‌ను కూడా మీరు ఉపయోగించవచ్చు."
    },
    {
      id: 2,
      question: language === "en"
        ? "Which fertilizer should I use for my crop?"
        : "నా పంటకు నేను ఏ ఎరువును ఉపయోగించాలి?",
      answer: language === "en"
        ? "Fertilizer needs depend on your crop type and soil condition. Use our 'Get Advice' feature where you input your crop and soil details, and we'll recommend the right NPK ratio and organic alternatives. Generally, get your soil tested every 6 months for best results."
        : "ఎరువు అవసరాలు మీ పంట రకం మరియు నేల పరిస్థితిపై ఆధారపడి ఉంటాయి. మీరు మీ పంట మరియు నేల వివరాలను ఇన్‌పుట్ చేసే మా 'సలహా పొందండి' ఫీచర్‌ను ఉపయోగించండి, మరియు మేము సరైన NPK నిష్పత్తి మరియు సేంద్రీయ ప్రత్యామ్నాయాలను సిఫార్సు చేస్తాము. సాధారణంగా, ఉత్తమ ఫలితాల కోసం ప్రతి 6 నెలలకు మీ నేలను పరీక్షించండి."
    },
    {
      id: 3,
      question: language === "en"
        ? "How can I control pests without chemicals?"
        : "రసాయనాలు లేకుండా నేను తెగుళ్ళను ఎలా నియంత్రించగలను?",
      answer: language === "en"
        ? "Use neem oil spray (mix 10ml neem oil with 1 liter water), plant marigold flowers around your crops, use sticky traps for insects, and maintain healthy soil. Check the Learning section for detailed organic pest control methods. Remove infected plants immediately to prevent spread."
        : "నిమ్మ నూనె స్ప్రే ఉపయోగించండి (1 లీటర్ నీటితో 10మి.లీ నిమ్మ నూనె కలపండి), మీ పంటల చుట్టూ బంతి పువ్వులు నాటండి, కీటకాల కోసం స్టికీ ట్రాప్‌లను ఉపయోగించండి, మరియు ఆరోగ్యకరమైన నేలను నిర్వహించండి. వివరణాత్మక సేంద్రీయ తెగులు నియంత్రణ పద్ధతుల కోసం నేర్చుకోవడం విభాగాన్ని తనిఖీ చేయండి. వ్యాప్తిని నివారించడానికి సోకిన మొక్కలను వెంటనే తొలగించండి."
    },
    {
      id: 4,
      question: language === "en"
        ? "What is the best season to plant rice?"
        : "వరి నాటడానికి ఉత్తమ సీజన్ ఏది?",
      answer: language === "en"
        ? "Rice is best planted at the beginning of monsoon season (June-July) when there's adequate water. However, in areas with irrigation facilities, you can also grow rice in winter (Rabi season). The crop needs consistent water supply for 3-4 months."
        : "వరి వానాకాలం ప్రారంభంలో (జూన్-జూలై) తగినంత నీరు ఉన్నప్పుడు నాటడం ఉత్తమం. అయితే, నీటిపారుదల సౌకర్యాలు ఉన్న ప్రాంతాల్లో, మీరు శీతాకాలంలో (రబీ సీజన్) కూడా వరిని పండించవచ్చు. పంటకు 3-4 నెలలు స్థిరమైన నీటి సరఫరా అవసరం."
    },
    {
      id: 5,
      question: language === "en"
        ? "How do I use this app?"
        : "నేను ఈ యాప్‌ను ఎలా ఉపయోగించాలి?",
      answer: language === "en"
        ? "1. Start by selecting your language. 2. Click 'Get Advice' and fill in your crop and soil details. 3. Get personalized recommendations. 4. Check 'Weather Info' for daily updates. 5. Visit 'Learn Farming' section for tips and tutorials. 6. Enable alerts to get important notifications."
        : "1. మీ భాషను ఎంచుకోవడం ద్వారా ప్రారంభించండి. 2. 'సలహా పొందండి'పై క్లిక్ చేసి మీ పంట మరియు నేల వివరాలను పూరించండి. 3. వ్యక్తిగత సిఫార్సులను పొందండి. 4. రోజువారీ నవీకరణల కోసం 'వాతావరణ సమాచారం' తనిఖీ చేయండి. 5. చిట్కాలు మరియు ట్యుటోరియల్స్ కోసం 'వ్యవసాయం నేర్చుకోండి' విభాగాన్ని సందర్శించండి. 6. ముఖ్యమైన నోటిఫికేషన్‌లను పొందడానికి హెచ్చరికలను ప్రారంభించండి."
    },
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    setChatMessages([
      ...chatMessages,
      { sender: "user", message: chatMessage },
      {
        sender: "bot",
        message: language === "en"
          ? "Thank you for your question! Our agriculture experts will respond shortly. In the meantime, check the FAQ section or call our helpline."
          : "మీ ప్రశ్నకు ధన్యవాదాలు! మా వ్యవసాయ నిపుణులు త్వరలో స్పందిస్తారు. ఈలోగా, FAQ విభాగాన్ని తనిఖీ చేయండి లేదా మా హెల్ప్‌లైన్‌కు కాల్ చేయండి."
      }
    ]);
    setChatMessage("");
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
            <HelpCircle className="w-10 h-10" />
            {language === "en" ? "Help & Support" : "సహాయం మరియు మద్దతు"}
          </h1>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-600 text-white rounded-xl p-6 text-center shadow-lg">
            <Phone className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl mb-2">
              {language === "en" ? "Call Us" : "మాకు కాల్ చేయండి"}
            </h3>
            <p className="text-2xl">1800-XXX-XXXX</p>
            <p className="text-sm mt-2 opacity-90">
              {language === "en" ? "24/7 Helpline" : "24/7 హెల్ప్‌లైన్"}
            </p>
          </div>
          <div className="bg-blue-600 text-white rounded-xl p-6 text-center shadow-lg">
            <Mail className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl mb-2">
              {language === "en" ? "Email Us" : "మాకు ఈమెయిల్ చేయండి"}
            </h3>
            <p className="text-lg">support@farmhelp.in</p>
            <p className="text-sm mt-2 opacity-90">
              {language === "en" ? "Response in 24hrs" : "24 గంటల్లో స్పందన"}
            </p>
          </div>
          <div className="bg-purple-600 text-white rounded-xl p-6 text-center shadow-lg">
            <MessageCircle className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl mb-2">
              {language === "en" ? "Chat" : "చాట్"}
            </h3>
            <p className="text-lg">
              {language === "en" ? "Live Chat Below" : "క్రింద లైవ్ చాట్"}
            </p>
            <p className="text-sm mt-2 opacity-90">
              {language === "en" ? "Quick answers" : "త్వరిత సమాధానాలు"}
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl text-green-800 mb-4">
            {language === "en" ? "Frequently Asked Questions" : "తరచుగా అడిగే ప్రశ్నలు"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => {
              const isExpanded = expandedFaq === faq.id;
              return (
                <div key={faq.id} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <h3 className="text-lg text-gray-900">{faq.question}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="p-4 bg-gray-50 border-t-2 border-gray-200">
                      <p className="text-base text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple Chatbot */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl text-green-800 mb-4">
            {language === "en" ? "Chat with Assistant" : "సహాయకునితో చాట్ చేయండి"}
          </h2>

          {/* Chat Messages */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4 h-64 overflow-y-auto">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-3 ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white"
                      : "bg-white border-2 border-gray-200 text-gray-800"
                  }`}
                >
                  <p className="text-base">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder={
                language === "en"
                  ? "Type your question..."
                  : "మీ ప్రశ్నను టైప్ చేయండి..."
              }
              className="flex-1 p-4 text-lg border-4 border-green-300 rounded-xl focus:border-green-600 focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-600 text-white px-6 rounded-xl hover:bg-green-700 transition-colors"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
