import React from "react";
import LSTM_Result from "./LSTM_Result";
import LSTM_XAI from "./LSTM_XAI";

export default function HeatModelResult() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 my-10 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        🤖 모델 성능 및 XAI
      </h2>
      <LSTM_Result />
      <LSTM_XAI />
    </section>
  );
}
