import React from 'react';
import TabMenu from './TabMenu';

const AboutMe = () => {
  const tabs = [
    {
      id: 1,
      title: 'Education',
      content: 'I have X years of experience in web development...',
    },
    {
      id: 2,
      title: 'Certifications',
      content: 'My technical skills include React, JavaScript, HTML, CSS...',
    },
  ];

  return (
    <div className="about-me-section">
      <TabMenu tabs={tabs} />
    </div>
  );
};

export default AboutMe;
