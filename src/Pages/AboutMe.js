import React from 'react';
import TabMenu from './TabMenu';
import '../Component/TabMenu.css';

const AboutMe = () => {
  const tabs = [
    {
      id: 1,
      title: 'Education',
      content: (
        <div className='education-content'>
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
        <ul class="certlist">
		      <li>Adobe Premiere Pro - 6/15/2020</li>
		      <li>Microsoft Excel - 11/21/2019</li>
		      <li>Microsoft Excel Expert - 12/17/2019</li>
		      <li>Microsoft PowerPoint - 12/13/2018</li>
		      <li>Microsoft Word - 11/14/2018</li>
		      <li>Python Programming - 1/16/2020</li>
	      </ul>
      ),
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <TabMenu tabs={tabs} />
    </div>
  );
};

export default AboutMe;