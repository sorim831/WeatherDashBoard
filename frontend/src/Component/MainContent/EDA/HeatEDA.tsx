import React from "react";
import SunTimeChart from "./SunTimeChart";
import OutlierEDA from "./OutlierEDA";
import DiffEDA from "./DiffEDA";

export default function HeatEDA() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 my-10 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        📌 간단한 EDA 및 전처리
      </h2>
      <OutlierEDA />
      <SunTimeChart />
      <DiffEDA />
    </section>
  );
}
