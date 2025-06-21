import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function DiffEDA() {
  const BACK_URL = "http://localhost:8000/static";
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const [hoverText, setHoverText] = useState(["", ""]);

  const imgList = ["EDA_heat_demand.png", "EDA_heat_demand_diff.png"];
  const pyList = ["EDA_heat_demand.py", "EDA_heat_demand_diff.py"];

  useEffect(() => {
    Promise.all(
      pyList.map((file) =>
        fetch(`${BACK_URL}/${file}`).then((res) => res.text())
      )
    )
      .then((dataList) => setHoverText(dataList))
      .catch((err) => console.error("코드 불러오기 실패:", err));
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        비정상시계열 차분
      </h2>
      <div className="flex justify-center items-center space-x-16 relative">
        {imgList.map((img, i) => (
          <div
            key={img}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={`${BACK_URL}/${img}`}
              alt={`EDA 시각화 ${i}`}
              className="w-[400px] h-auto rounded-lg shadow-md"
            />
            {hoveredIndex === i && (
              <div className="absolute -right-[450px] top-[60px] w-[400px] h-[300px] bg-white border border-blue-400 text-gray-800 text-sm rounded-lg shadow-lg font-mono p-4 leading-tight whitespace-pre-wrap overflow-y-auto z-50">
                <div className="absolute left-[-10px] top-[30px] w-0 h-0 border-y-[10px] border-l-[10px] border-y-transparent border-l-blue-400" />
                {hoverText[i]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
