import React from 'react';
import TabMenu from './TabMenu';
import '../Component/TabMenu.css';
import '../Component/Certifications.css';
import PictureGrid from './GridLayout';
import images from './Images'

const AboutMe = () => {
  const tabs = [
    {
      id: 1,
      title: 'Learned',
      content: (
        <div>
            <PictureGrid images={images} />
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