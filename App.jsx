import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code,
  User,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 
        transition-colors duration-500 ease-in-out
        ${
          darkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        }`}
    >
      <div
        className={`shadow-2xl rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 overflow-hidden 
          transition-colors duration-500 ease-in-out
          ${
            darkMode
              ? "bg-gray-800 text-gray-100"
              : "bg-white text-gray-800"
          }`}
      >
        {/* Left Sidebar */}
        <div
          className={`p-6 flex flex-col items-center transition-colors duration-500 ease-in-out
            ${darkMode ? "bg-gray-700 text-white" : "bg-indigo-600 text-white"}`}
        >
          <img
            src="/Tanti_foto.jpg"
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="mt-4 text-2xl font-bold">Tri Rostinati</h1>
          <p className="opacity-80">Fullstack Web Developer</p>

          {/* Toggle Dark Mode */}
          <button
            onClick={toggleTheme}
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 
                       transition duration-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          {/* Contact */}
          <div className="mt-6 space-y-3 text-sm w-full">
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>trirostingy@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>+62 895 3921 60450</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-span-2 p-8 space-y-8">
          {/* Summary */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold mb-2">
              <User size={20} /> Summary
            </h2>
            <p>
              Passionate web developer with experience in building modern web
              applications using React, Vite, and Tailwind CSS. Skilled in
              creating responsive and user-friendly designs with clean code.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold mb-2">
              <GraduationCap size={20} /> Education
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Bachelor of Computer Science - Gunadarma (1996)</li>
              <li>Master of Computer Science - Binus (2018)</li>
              <li>Fullstack Web Development Bootcamp - Sinau Academy (2025)</li>
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold mb-2">
              <Code size={20} /> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Vite",
                "Tailwind CSS",
                "Node.js",
                "Git",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-500 ease-in-out
                    ${
                      darkMode
                        ? "bg-gray-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
