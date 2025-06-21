import React from "react";

export default function HeatModelResult() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 my-10 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        🤖 2. 모델 성능 및 XAI
      </h2>
      <p className="text-gray-700">
        예측 정확도, RMSE, MAPE 등 성능 지표와 함께 SHAP, LIME 등을 통한 XAI
        시각화를 표시할 예정입니다.
      </p>
    </section>
  );
}
