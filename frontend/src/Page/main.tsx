import React from "react";
import NavBar from "../Component/NavigationBar/NavBar";
import HeatOutline from "../Component/Outline/HeatOutline";
import CallOutline from "../Component/Outline/CallOutline";
import SubwayOutline from "../Component/Outline/SubwayOutline";

export default function MainPage() {
  return (  
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white text-gray-800 font-sans">
      <NavBar />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 프로젝트 개요</h1>
        <HeatOutline />
        <CallOutline />
        <SubwayOutline />
    </div>
  );
}
