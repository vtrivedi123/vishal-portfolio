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
            <PictureGrid images={images.images} texts={images.texts} />
          </div>
      ),
    },
    {
      id: 2,
      title: 'Certifications',
      content: (
      <div className="timeline flex justify-between items-center">
        {/* First empty block */}
        <div className="timeline-empty w-1/5"></div>

        {/* First circle */}
        <div className="timeline-middle w-1/5 flex justify-center items-center">
          <div className="timeline-circle w-4 h-4 rounded-full bg-black"></div>
        </div>

        {/* First content */}
        <div className="timeline-component timeline-content w-3/5">
          <h3>2018</h3>
          <p>Microsoft Word</p>
          <p>Microsoft PowerPoint</p>
        </div>

        {/* Second content */}
        <div className="timeline-component timeline-content w-3/5">
          <h3>2019</h3>
          <p>Microsoft Excel</p>
          <p>Microsoft Excel Expert</p>
        </div>

        {/* Second circle */}
        <div className="timeline-middle w-1/5 flex justify-center items-center">
          <div className="timeline-circle w-4 h-4 rounded-full bg-black"></div>
        </div>

        {/* Second empty block */}
        <div className="timeline-empty w-1/5"></div>

        {/* Third empty block */}
        <div className="timeline-empty w-1/5"></div>

        {/* Third circle */}
        <div className="timeline-middle w-1/5 flex justify-center items-center">
          <div className="timeline-circle w-4 h-4 rounded-full bg-black"></div>
        </div>

        {/* Third content */}
        <div className="timeline-component timeline-content w-3/5">
          <h3>2020</h3>
          <p>Python Programming</p>
          <p>Adobe Premiere Pro</p>
        </div>
      </div>
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