import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🌤️ Weather Dashboard
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-gray-600">
          <li>
            <a href="/" className="hover:text-blue-500 transition-colors">
              🔥 지역난방 열수요 예측
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
