import React from "react";

export default function SubwayOutline() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-green-600 mb-2">🚇 지하철 혼잡도 예측</h2>
      <p className="text-gray-700 leading-relaxed">
        기상 조건은 시민의 이동 패턴에 영향을 미쳐, 지하철 혼잡도에 큰 변화를 유발합니다. 본 분석은 기상 데이터와 지하철 승하차 데이터를 바탕으로
        날씨 요소와 혼잡도의 상관관계를 파악하고, 머신러닝 모델을 통해 혼잡도를 예측합니다. 이를 통해 노선별 혼잡 완화, 실시간 안내 시스템 개선 등
        도시 교통 운영 효율화에 기여할 수 있습니다.
      </p>
    </section>
  );
}
