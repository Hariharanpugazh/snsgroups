import React from 'react';
import CircularProgress from './CircularProgress/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLaptop, faLightbulb, faSchool, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Section1: React.FC = () => {
  const features = [
    {
      title: 'SNS Venture Capital & Investment',
      description: 'Funding high-potential startups for strategic ownership stakes.',
      icon: faBuilding,
      link: '',
      color: 'bg-[#DE2A1B]', // Updated to #DE2A1B
    },
    {
      title: 'SNS Square Technologies',
      description: 'Driving digital transformation with cutting-edge IT and software solutions.',
      icon: faLaptop,
      link: 'https://www.snssquare.com/',
      color: 'bg-[#EB510B]', // Updated to #EB510B
    },
    {
      title: 'SNS Innovation Hub',
      description: 'Empowering entrepreneurs with mentorship, resources, and a platform for innovation.',
      icon: faLightbulb,
      link: 'https://snsihub.ai/',
      color: 'bg-[#B0B402]', // Updated to #B0B402
    },
    {
      title: 'SNS Institutions',
      description: 'Fostering holistic growth through high-quality education.',
      icon: faSchool,
      link: 'https://main.snsgroups.com/',
      color: 'bg-[#E10485]', // Updated to #E10485
    },
    {
      title: 'SNS SPINE',
      description: 'Enabling mental and physical well-being through sports, gaming, entertainment, and clubs.',
      icon: faDumbbell,
      link: 'https://snsspine.in/',
      color: 'bg-[#01A3D4]', // Updated to #01A3D4
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen p-4">
      {/* Circular Progress */}
      <div className="flex-shrink-0">
        <CircularProgress
          segments={[
            { color: '#FF0000', percentage: 20 },
            // Add more segments here
          ]}
        />
      </div>

      {/* Features */}
      <div className="flex flex-col space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center p-4 rounded-lg shadow-md text-white ${feature.color}`}
          >
            <FontAwesomeIcon icon={feature.icon} className="text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
