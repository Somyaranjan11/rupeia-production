import React from "react";

const COLORS = [
  "#A76CE8",
  "#EE6FCB",
  "#3AC2BD",
  "#FF9E28",
  "#F9C829",
  "#54A1E8",
  "#FF6666",
  "#8DFF9E",
];

const DonutChart = ({ allocationFunds = [] }) => {
  const total = allocationFunds.reduce(
    (acc, curr) => acc + curr.allocationPercentage,
    0
  );

  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent, radius = 1) => {
    const x = Math.cos(2 * Math.PI * percent) * radius;
    const y = Math.sin(2 * Math.PI * percent) * radius;
    return [x, y];
  };

  return (
    <div className="w-full">
      <div className="donut-wrapper relative w-full h-[300px] flex justify-center items-center">
        <svg
          width="100%"
          height="100%"
          viewBox="-1 -1 2 2"
          className="chart-svg"
        >
          {allocationFunds.map((slice, i) => {
            const slicePercent = slice.allocationPercentage / total;
            const [startX, startY] =
              getCoordinatesForPercent(cumulativePercent);
            cumulativePercent += slicePercent;
            const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
            const largeArcFlag = slicePercent > 0.5 ? 1 : 0;

            const pathData = `
            M ${startX} ${startY}
            A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}
            L 0 0
          `;

            const midPercent = cumulativePercent - slicePercent / 2;
            const [textX, textY] = getCoordinatesForPercent(midPercent, 0.5);

            return (
              <g key={i}>
                <path d={pathData} fill={COLORS[i % COLORS.length]} />
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="0.11"
                >
                  {Math.round(slicePercent * 100)}%
                </text>
              </g>
            );
          })}

          <circle cx="0" cy="0" r="0.24" fill="black" />
        </svg>

        {/* Labels (outside) */}
      </div>
      <div className="flex flex-row flex-wrap gap-4 mt-8">
        {allocationFunds?.map((slice, i) => {
          return (
            <div key={i} className="flex items-center gap-2 mb-1">
              <div
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
                className="h-5 w-5 border-[1px] border-black rounded"
              ></div>
              <p className="text-[14px] capitalize">
                {slice.fundCategory.replace(/-/g, " ")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonutChart;
