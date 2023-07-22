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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
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