import React, { useState, useEffect } from "react";

export default function LSTM_Result() {
  const BACK_URL = "http://localhost:8000/static";
  const [showCode, setShowCode] = useState(false);
  const [codeText, setCodeText] = useState("");

  useEffect(() => {
    fetch(`${BACK_URL}/LSTM_Result.py`)
      .then((res) => res.text())
      .then((text) => setCodeText(text))
      .catch((err) => console.error("코드 불러오기 실패:", err));
  }, []);

  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">📊 성능 지표</h3>
      <table className="w-full text-left border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">평균</th>
            <th className="px-4 py-2 border">표준편차</th>
            <th className="px-4 py-2 border">R² Score</th>
            <th className="px-4 py-2 border">RMSE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">95.16</td>
            <td className="px-4 py-2 border">115.74</td>
            <td className="px-4 py-2 border">0.85</td>
            <td className="px-4 py-2 border">10.52</td>
          </tr>
        </tbody>
      </table>

      <img
        src={`${BACK_URL}/LSTM_Result.png`}
        alt="LSTM 결과"
        className="w-full max-w-[600px] mx-auto rounded-md shadow-md mb-4"
      />

      <button
        onClick={() => setShowCode(!showCode)}
        className="bg-green-100 text-green-700 px-4 py-2 rounded hover:bg-green-200 transition"
      >
        {showCode ? "🔽 코드 숨기기" : "📄 코드 보기"}
      </button>

      {showCode && (
        <pre className="mt-4 p-4 bg-gray-100 rounded text-sm font-mono text-gray-800 whitespace-pre-wrap overflow-x-auto">
          {codeText}
        </pre>
      )}
    </div>
  );
}
