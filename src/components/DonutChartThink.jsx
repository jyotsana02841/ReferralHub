import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./../styles/DonutChartThick.css"; // Import the CSS file

function DonutChartThick() {
  const data = [
    { name: "Referral Sent", value: 57 },
    { name: "Converted", value: 43 },
  ];

  const COLORS = ["#3498db", "#e0e0e0"];

  return (
    <div className="donut-chart-container">
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={80}
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
    </div>
  );
}

export default DonutChartThick;
