"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "BFSI", value: 46, color: "#10404A" },       // Your Primary Dark Teal
  { name: "Business Consulting", value: 4, color: "#FF8B61" }, // Your Primary Orange
  { name: "Energy", value: 11, color: "#3AAFA9" },     // Your Secondary Light Teal
  { name: "Manufacturing", value: 14, color: "#1F6D71" }, // A Mid-Teal (used in your gradients)
  { name: "FMCG / Retail", value: 14, color: "#FB7035" }, // A darker/vibrant Orange (used in hover states)
  { name: "Retail", value: 11, color: "#2B9D97" }      // A shade slightly darker than the light teal
];

export default function SectorAnalyticsCard() {
  return (
    <div className="w-full p-4">
      
      {/* Title */}
      

      {/* Chart */}
      <div className="relative h-50">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-gray-900">46%</span>
          <span className="text-sm text-gray-500">BFSI</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600">
              {item.name} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
