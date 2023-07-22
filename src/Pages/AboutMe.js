import React from 'react';
import TabMenu from './TabMenu';
import '../Component/TabMenu.css';

const AboutMe = () => {
  const tabs = [
    {
      id: 1,
      title: 'Education',
      content: (
        <div>
          <p>
            I have X years of experience in web development...
          </p>
          <p>
            Additional details about your education can go here...
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Certifications',
      content: (
        <div>
          <p>
            My technical skills include React, JavaScript, HTML, CSS...
          </p>
          <p>
            Any other information about your certifications can be added here...
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="about-me-section">
      <TabMenu tabs={tabs} />
    </div>
  );
};

export default AboutMe;