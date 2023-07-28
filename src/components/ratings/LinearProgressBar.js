import React from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const LinearProgressBar = ({ percentage }) => {
  const data = [
    {
      value: percentage,
    },
  ];

  return (
    <div className="flex w-full items-center mb-4">
    <ResponsiveContainer width="100%" height={30}>
      <LineChart data={data} margin={{ left: 5, right: 5 }}>
        <XAxis dataKey="name" hide={true} />
        <YAxis type="number" domain={[0, 100]} hide={true} />
        <Line
          dataKey="value"
          stroke="#007BFF"
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default LinearProgressBar;
