import React from "react";
import { PieChart, Pie, Cell } from "recharts";

function DonutChart({ percentage, color }) {
  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = [color, "#e0e0e0"];

  return (
    <div style={{ position: "relative", width: 150, height: 150 }}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "18px",
          fontWeight: "bold",
          color: color,
        }}
      >
        {percentage}%
      </div>
    </div>
  );
}

export default DonutChart;
