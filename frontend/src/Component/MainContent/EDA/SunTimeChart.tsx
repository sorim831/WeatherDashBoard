"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// 유틸: HH:MM → 시간 단위 float 변환 (예: "07:45" → 7.75)
const timeToFloat = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h + m / 60;
};

export default function SunTimeChart() {
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const sunrise = [
    "07:45",
    "07:21",
    "06:43",
    "05:57",
    "05:23",
    "05:10",
    "05:23",
    "05:48",
    "06:14",
    "06:40",
    "07:12",
    "07:39",
  ].map(timeToFloat);
  const sunset = [
    "17:38",
    "18:11",
    "18:39",
    "19:05",
    "19:34",
    "19:53",
    "19:53",
    "19:24",
    "18:40",
    "17:55",
    "17:21",
    "17:15",
  ].map(timeToFloat);

  const data = {
    labels: months,
    datasets: [
      {
        label: "일출 시간",
        data: sunrise,
        borderColor: "rgb(234, 88, 12)",
        backgroundColor: "rgba(234, 88, 12, 0.1)",
        tension: 0.3,
      },
      {
        label: "일몰 시간",
        data: sunset,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => {
            const floatHour = ctx.parsed.y;
            const hours = Math.floor(floatHour);
            const minutes = Math.round((floatHour - hours) * 60);
            return `${ctx.dataset.label}: ${hours}시 ${minutes}분`;
          },
        },
      },
    },
    scales: {
      y: {
        min: 5,
        max: 20,
        ticks: {
          callback: (val: any) => `${val}시`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md my-8">
      <h3 className="text-l font-semibold text-gray-800 mb-3">
        월별 일출/일몰 시간
      </h3>
      <Line data={data} options={options} />

      <p className="text-s text-gray-600 mt-4">
        <strong>
          ※ 전처리 기준: 낮 시간대 이상치는{" "}
          <span className="font-medium text-red-500">제거</span>, 밤 시간대
          이상치는 <span className="font-medium text-blue-500">0으로 대체</span>
        </strong>
      </p>
    </div>
  );
}
