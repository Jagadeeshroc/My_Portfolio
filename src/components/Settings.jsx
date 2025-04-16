import React, { useState } from "react";
import { FaPalette, FaMoon, FaSun, FaFont, FaSlidersH } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("'Inter', sans-serif");

  const colorOptions = [
    { name: "Purple", value: "#4f46e5" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#10b981" },
    { name: "Red", value: "#ef4444" },
    { name: "Pink", value: "#ec4899" },
    { name: "Orange", value: "#f97316" },
  ];

  const fontOptions = [
    { name: "Inter", value: "'Inter', sans-serif" },
    { name: "Roboto", value: "'Roboto', sans-serif" },
    { name: "Open Sans", value: "'Open Sans', sans-serif" },
    { name: "Montserrat", value: "'Montserrat', sans-serif" },
    { name: "Poppins", value: "'Poppins', sans-serif" },
  ];

  const applyTheme = () => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty("--font-size", `${fontSize}px`);
    document.documentElement.style.setProperty("--font-family", fontFamily);
    document.documentElement.classList.toggle("dark", darkMode);
  };

  React.useEffect(() => {
    applyTheme();
  }, [darkMode, primaryColor, fontSize, fontFamily]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <FaSlidersH className="text-primary" />
           Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Customize the look and feel of your portfolio
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          {/* Dark Mode Toggle */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <FaMoon className="text-primary" />
              Theme Mode
            </h2>
            <div className="mt-4 flex items-center">
              <button
                onClick={() => setDarkMode(false)}
                className={`px-4 py-2 rounded-l-lg border ${
                  !darkMode
                    ? "bg-primary text-white border-primary"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                }`}
              >
                <FaSun className="inline mr-2" />
                Light
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`px-4 py-2 rounded-r-lg border ${
                  darkMode
                    ? "bg-primary text-white border-primary"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                }`}
              >
                <FaMoon className="inline mr-2" />
                Dark
              </button>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <FaPalette className="text-primary" />
              Primary Color
            </h2>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setPrimaryColor(color.value)}
                  className={`h-10 rounded-md border-2 ${
                    primaryColor === color.value
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={color.name}
                ></button>
              ))}
            </div>
          </div>

          {/* Font Settings */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <FaFont className="text-primary" />
              Typography
            </h2>
            <div className="mt-4 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Font Family
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {fontOptions.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Font Size: {fontSize}px
                </label>
                <input
                  type="range"
                  min="12"
                  max="20"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
              Preview
            </h3>
            <div className="space-y-3">
              <h4 className="text-xl font-bold" style={{ color: primaryColor }}>
                This is a heading
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                This is what your body text will look like with the current
                settings. You can see how the font family, size, and colors
                appear together.
              </p>
              <button
                className="px-4 py-2 rounded-md"
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                Primary Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;