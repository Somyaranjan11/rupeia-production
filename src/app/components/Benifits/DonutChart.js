import React from 'react';

const data = [
  { name: 'Large Cap', value: 22, color: '#A76CE8' },
  { name: 'Small Cap', value: 29, color: '#EE6FCB' },
  { name: 'Gold', value: 14, color: '#3AC2BD' },
  { name: 'Debt', value: 12, color: '#FF9E28' },
  { name: 'Mid Cap', value: 7, color: '#F9C829' },
  { name: 'Flexi Cap', value: 10, color: '#54A1E8' },
];

const DonutChart = () => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent, radius = 1) => {
    const x = Math.cos(2 * Math.PI * percent) * radius;
    const y = Math.sin(2 * Math.PI * percent) * radius;
    return [x, y];
  };

  return (
    <div className="donut-wrapper">
      <svg className='chart-svg' width="100%" height="100%" viewBox="-1 -1 2 2" >
        {data.map((slice, i) => {
          const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
          const slicePercent = slice.value / total;
          cumulativePercent += slicePercent;
          const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

          const largeArcFlag = slicePercent > 0.5 ? 0 : 0;

          const pathData = `
            M ${startX} ${startY}
            A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}
            L ${endX * 0} ${endY * 0}
            A 0.6 0.6 0 ${largeArcFlag} 0 ${startX * 0} ${startY * 0}
            Z
          `;

          // Mid-point for label
          const midPercent = cumulativePercent - slicePercent / 2;
          const [textX, textY] = getCoordinatesForPercent(midPercent, 0.5);

          return (
            <g key={i}>
              <path d={pathData} 
              fill={slice.color} 
              />
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

        {/* Small inner circle to cut the middle (donut hole) */}
        <circle cx="0" cy="0" r="0.24" fill="black"  width={20} height={20}/>
      </svg>

      {/* External labels positioned manually */}
      <div className="labels">
        <span className="label" style={{ top: '28%', left: '85%' }}>Small Cap</span>
        <span className="label" style={{ top: '70%', left: '85%' }}>Large Cap</span>
        <span className="label" style={{ top: '12%', left: '-5%' }}>Gold</span>
        <span className="label" style={{ top: '5%', left: '80%' }}>Debt</span>
        <span className="label" style={{ top: '70%', left: '-15%' }}>Mid Cap</span>
        <span className="label" style={{ top: '-10%', left: '35%' }}>Flexi Cap</span>
      </div>
    </div>
  );
};

export default DonutChart;
