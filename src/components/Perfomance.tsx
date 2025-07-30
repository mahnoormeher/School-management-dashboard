"use client";

import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Scored", value: 92, fill: "#e9d5ff" },
  { name: "Remaining", value: 8, fill: "#fef08a" },
];

const Performance = () => {
  return (
    <div className="bg-white rounded-md p-4 relative h-64 w-full ">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="more" width={16} height={16} />
      </div>

      {/* Chart + Center Text */}
      <div className="relative h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              startAngle={180}
              endAngle={0}
              paddingAngle={0}
              dataKey="value"
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold">9.2</h2>
          <p className="text-[10px] text-gray-400">of 10 max LTS</p>
        </div>
      </div>

      {/* Bottom Label */}
      <h2 className="text-sm text-center font-medium mt-1">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

export default Performance;
