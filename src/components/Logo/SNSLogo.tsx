import React from 'react';
import CircularProgress from '../CircularProgress/CircularProgress';

interface SNSLogoProps {
  size?: string;
}

const SNSLogo: React.FC<SNSLogoProps> = ({ size = '800px' }) => {
  const segments = [
    { color: '#00BFFF', percentage: 15 }, // Blue
    { color: '#FF6B00', percentage: 15 }, // Orange
    { color: '#FF1493', percentage: 15 }, // Pink
    { color: '#90FF00', percentage: 15 }, // Lime
    { color: '#FF4444', percentage: 15 }, // Red
  ];

  return (
    <div className="relative inline-block" style={{ width: size }}>
      <CircularProgress segments={segments} size={size} />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* White border container */}
        <div className="bg-white rounded-full w-[75%] h-[75%] flex items-center justify-center">
          {/* Yellow circle with content */}
          <div className="bg-yellow-400 rounded-full w-[93%] h-[93%] flex flex-col items-center justify-center shadow-lg">
            <h2 className="text-black font-bold text-[calc(0.15*var(--logo-size))]" style={{ '--logo-size': size } as any}>
              SNS
            </h2>
            <p className="text-black text-center text-[calc(0.06*var(--logo-size))] leading-tight" style={{ '--logo-size': size } as any}>
              Design Thinking<br />Consultancy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SNSLogo;