import React from "react";

export default function CallOutline() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-red-600 mb-2">🚨 119 신고 예측</h2>
      <p className="text-gray-700 leading-relaxed">
        날씨 변화는 화재, 구조, 구급 등 119 신고 건수에 직접적인 영향을 미칩니다. 본 프로젝트는 소방청 신고 데이터와 기상청 데이터를 융합하여
        요일, 기온, 강수량 등 날씨 요인에 따른 119 신고 건수를 예측합니다. 예측 결과는 자원 배치와 사전 대응 전략 수립에 활용될 수 있으며,
        긴급 상황 대응의 리드타임을 단축하는 데 기여할 수 있습니다.
      </p>
    </section>
  );
}
