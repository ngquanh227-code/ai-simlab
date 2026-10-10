import React from 'react';

export default function RadarChart({ scores = { law: 75, lang: 80, mgmt: 70, econ: 85 }, size = 280 }) {
  const axes = [
    { key: 'law', label: 'Luật Kinh Tế', code: 'LAW' },
    { key: 'lang', label: 'Ngôn Ngữ', code: 'LANG' },
    { key: 'mgmt', label: 'Quản Trị', code: 'MGMT' },
    { key: 'econ', label: 'Kinh Tế', code: 'ECON' }
  ];

  const center = size / 2;
  const radius = size * 0.36;

  const getCoordinates = (angleDeg, value) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180);
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angleRad),
      y: center + r * Math.sin(angleRad)
    };
  };

  const angles = [0, 90, 180, 270];
  const gridLevels = [25, 50, 75, 100];

  // Benchmark polygon (65%)
  const benchmarkPoints = angles
    .map(angle => {
      const { x, y } = getCoordinates(angle, 65);
      return `${x},${y}`;
    })
    .join(' ');

  // Student points
  const studentPoints = axes
    .map((axis, i) => {
      const val = Math.min(100, Math.max(0, scores[axis.key] || 0));
      const { x, y } = getCoordinates(angles[i], val);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: 'visible' }}>
        
        {/* Concentric grid rings */}
        {gridLevels.map(level => {
          const pts = angles
            .map(angle => {
              const { x, y } = getCoordinates(angle, level);
              return `${x},${y}`;
            })
            .join(' ');

          return (
            <polygon
              key={level}
              points={pts}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
            />
          );
        })}

        {/* Crosshair axes */}
        {angles.map((angle, i) => {
          const { x, y } = getCoordinates(angle, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
            />
          );
        })}

        {/* Benchmark line */}
        <polygon
          points={benchmarkPoints}
          fill="none"
          stroke="rgba(156, 163, 175, 0.35)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />

        {/* Active student polygon */}
        <polygon
          points={studentPoints}
          fill="rgba(37, 99, 235, 0.18)"
          stroke="#3B82F6"
          strokeWidth="2"
          style={{ transition: 'all 0.4s ease-out' }}
        />

        {/* Node dots & Labels */}
        {axes.map((axis, i) => {
          const val = Math.min(100, Math.max(0, scores[axis.key] || 0));
          const { x, y } = getCoordinates(angles[i], val);
          const labelCoord = getCoordinates(angles[i], 126);

          return (
            <g key={axis.key}>
              <circle
                cx={x}
                cy={y}
                r="3.5"
                fill="#3B82F6"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                style={{ transition: 'all 0.4s ease-out' }}
              />
              <text
                x={labelCoord.x}
                y={labelCoord.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#D1D5DB"
                fontSize="11"
                fontWeight="500"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {axis.code} {val}%
              </text>
            </g>
          );
        })}
      </svg>

      <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '11px', color: '#6B7280', fontFamily: 'var(--font-mono)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3B82F6', display: 'inline-block' }} />
          <span>Điểm Của Bạn</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '1px', borderTop: '1px dashed #9CA3AF', display: 'inline-block' }} />
          <span>Chuẩn Ngành (65%)</span>
        </div>
      </div>
    </div>
  );
}
