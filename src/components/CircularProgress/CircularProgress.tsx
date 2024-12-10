import React from 'react';

interface CircularProgressProps {
  segments: Array<{
    color: string;
    percentage: number;
  }>;
  size?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ segments, size = '400px' }) => {
  const radius = 47; // Percentage of circle size
  const circumference = 6 * Math.PI * radius;
  let rotationOffset = 170; // Start from top

  return (
    <div className={`relative`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="transform -rotate-90 w-full h-full"
      >
        {segments.map((segment, index) => {
          const strokeDasharray = (segment.percentage / 100) * circumference;
          const strokeDashoffset = circumference - strokeDasharray;
          rotationOffset += (segment.percentage / 140) * 360;

          return (
            <circle
              key={index}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth="6"
              strokeDasharray={`${strokeDasharray} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              style={{
                transform: `rotate(${rotationOffset}deg)`,
                transformOrigin: 'center',
                transition: 'all 0.5s ease-out'
              }}
              className="origin-center"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CircularProgress;