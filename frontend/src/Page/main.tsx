import React from "react";
import NavBar from "../Component/NavigationBar/NavBar";
import HeatOutline from "../Component/Outline/HeatOutline";
import HeatEDA from "../Component/MainContent/EDA/HeatEDA";
import HeatModel from "../Component/MainContent/Model/HeatModel";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white text-gray-800 font-sans">
      <NavBar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          📊 프로젝트 개요
        </h1>
        <HeatOutline />
        <HeatEDA />
        <HeatModel />
      </main>
    </div>
  );
}
