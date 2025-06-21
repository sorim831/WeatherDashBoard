import React from "react";

export default function HeatEDA() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 my-10 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        📌 1. 간단한 EDA 및 전처리
      </h2>
      <p className="text-gray-700">
        데이터의 기본 통계, 이상치 제거, 결측치 처리 및 학습 전 스케일링 등
        전처리 내용을 요약 표시합니다.
      </p>
    </section>
  );
}
