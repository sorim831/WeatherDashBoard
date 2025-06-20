import React from "react";

export default function HeatOutline() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">
        📝 분석 배경 및 목표
      </h2>
      <p className="text-gray-700 leading-relaxed">
        기후 변화로 인한 기상 변동성 증가에 따라, 지역난방 수요의 예측은 에너지
        효율과 탄소 저감을 위해 중요한 과제로 대두되고 있습니다. 본 분석은{" "}
        <strong>기상청의 공공 기상 데이터</strong>와{" "}
        <strong>지역난방 사용 이력 데이터</strong>를 융합하여,{" "}
        <strong>머신러닝 기반 열수요 예측 모델</strong>을 개발하는 것을 목표로
        합니다. 이를 통해 <strong>에너지 절약</strong>,{" "}
        <strong>설비 최적화</strong>, <strong>운영 안정성 확보</strong> 등의
        효과를 기대할 수 있습니다.
      </p>
    </section>
  );
}
