import React from "react";
import NavBar from "../Component/NavigationBar/NavBar";
import HeatOutline from "../Component/Outline/HeatOutline";
import HeatEDA from "../Component/MainContent/EDA/HeatEDA";
import HeatModel from "../Component/MainContent/Model/HeatModel";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-sky-100 text-gray-800 font-sans">
      <NavBar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          🔥 지역난방 열수요 예측
        </h1>
        <div className="bg-white rounded-xl shadow-md p-6 my-8">
          <HeatOutline />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 my-8">
          <HeatEDA />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 my-8">
          <HeatModel />
        </div>
      </main>
    </div>
  );
}
