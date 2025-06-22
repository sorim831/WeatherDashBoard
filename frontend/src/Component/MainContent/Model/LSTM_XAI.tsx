import React from "react";

export default function LSTM_XAI() {
  const BACK_URL = "http://localhost:8000/static";
  const imgList = ["LSTM_XAI1.png", "LSTM_XAI2.png"];

  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        🧠 XAI 시각화
      </h3>
      <div className="flex flex-col items-center gap-6">
        {imgList.map((img) => (
          <img
            key={img}
            src={`${BACK_URL}/${img}`}
            alt={img}
            className="w-full max-w-[600px] rounded-md shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
