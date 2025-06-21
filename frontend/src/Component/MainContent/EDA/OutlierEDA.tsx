import React, { useEffect, useState } from "react";

export default function OutlierEDA() {
  const BACK_URL = "http://localhost:8000/static";
  const [isAll, setIsAll] = useState(true);
  const [hoverText, setHoverText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(`${BACK_URL}/EDA_all.py`)
      .then((res) => res.text())
      .then((data) => setHoverText(data))
      .catch((err) => console.error("코드 불러오기 실패:", err));
  }, []);

  const handleClick = () => {
    setIsAll((prev) => !prev);
  };

  const imgSrc = `${BACK_URL}/${isAll ? "EDA_all.png" : "EDA_SI.png"}`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        이상치 처리(heat.si)
      </h2>
      <div className="relative w-full flex justify-center mt-10">
        <div
          className="relative cursor-pointer"
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imgSrc}
            alt="EDA 시각화"
            className="w-[700px] h-auto rounded-lg shadow-md"
          />
          {isHovered && (
            <div className="absolute -right-[450px] top-[80px] w-[400px] h-[300px] bg-white border border-blue-400 text-gray-800 text-sm rounded-lg shadow-lg font-mono p-4 leading-tight whitespace-pre-wrap overflow-y-auto z-50">
              <div className="absolute left-[-10px] top-[30px] w-0 h-0 border-y-[10px] border-l-[10px] border-y-transparent border-l-blue-400" />
              {hoverText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
