import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "./Layout";
import { ArrowLeft, MapPin } from "lucide-react";

export function FarmerInputForm() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    soilType: "",
    cropType: "",
    location: "",
    waterAvailability: "",
    season: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in localStorage to use in recommendations page
    localStorage.setItem("farmerInputData", JSON.stringify(formData));
    navigate("/recommendations");
  };

  const soilTypes = [
    { value: "clayey", label: t("clayey") },
    { value: "sandy", label: t("sandy") },
    { value: "loamy", label: t("loamy") },
    { value: "black", label: t("blackSoil") },
    { value: "red", label: t("redSoil") },
  ];

  const cropTypes = [
    { value: "rice", label: t("rice") },
    { value: "wheat", label: t("wheat") },
    { value: "cotton", label: t("cotton") },
    { value: "sugarcane", label: t("sugarcane") },
    { value: "vegetables", label: t("vegetables") },
  ];

  const waterLevels = [
    { value: "low", label: t("low") },
    { value: "medium", label: t("medium") },
    { value: "high", label: t("high") },
  ];

  const seasons = [
    { value: "summer", label: t("summer") },
    { value: "monsoon", label: t("monsoon") },
    { value: "winter", label: t("winter") },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/")}
            className="bg-white p-3 rounded-xl shadow-md hover:bg-gray-50"
          >
            <ArrowLeft className="w-8 h-8 text-green-700" />
          </button>
          <h1 className="text-3xl sm:text-4xl text-green-800">
            {t("farmerInput")}
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          {/* Soil Type */}
          <div>
            <label className="block text-2xl text-green-800 mb-3">
              {t("soilType")}
            </label>
            <select
              value={formData.soilType}
              onChange={(e) =>
                setFormData({ ...formData, soilType: e.target.value })
              }
              required
              className="w-full p-4 text-xl border-4 border-green-300 rounded-xl focus:border-green-600 focus:outline-none"
            >
              <option value="">-- {t("soilType")} --</option>
              {soilTypes.map((soil) => (
                <option key={soil.value} value={soil.value}>
                  {soil.label}
                </option>
              ))}
            </select>
          </div>

          {/* Crop Type */}
          <div>
            <label className="block text-2xl text-green-800 mb-3">
              {t("cropType")}
            </label>
            <select
              value={formData.cropType}
              onChange={(e) =>
                setFormData({ ...formData, cropType: e.target.value })
              }
              required
              className="w-full p-4 text-xl border-4 border-green-300 rounded-xl focus:border-green-600 focus:outline-none"
            >
              <option value="">-- {t("cropType")} --</option>
              {cropTypes.map((crop) => (
                <option key={crop.value} value={crop.value}>
                  {crop.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-2xl text-green-800 mb-3 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              {t("location")}
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="Village/Town/City"
              required
              className="w-full p-4 text-xl border-4 border-green-300 rounded-xl focus:border-green-600 focus:outline-none"
            />
          </div>

          {/* Water Availability */}
          <div>
            <label className="block text-2xl text-green-800 mb-3">
              {t("waterAvailability")}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {waterLevels.map((level) => (
                <button
                  key={level.value}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, waterAvailability: level.value })
                  }
                  className={`p-4 text-xl rounded-xl border-4 transition-all ${
                    formData.waterAvailability === level.value
                      ? "bg-green-600 text-white border-green-700"
                      : "bg-white text-green-800 border-green-300 hover:border-green-500"
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* Season */}
          <div>
            <label className="block text-2xl text-green-800 mb-3">
              {t("season")}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {seasons.map((season) => (
                <button
                  key={season.value}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, season: season.value })
                  }
                  className={`p-4 text-xl rounded-xl border-4 transition-all ${
                    formData.season === season.value
                      ? "bg-green-600 text-white border-green-700"
                      : "bg-white text-green-800 border-green-300 hover:border-green-500"
                  }`}
                >
                  {season.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-2xl rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
