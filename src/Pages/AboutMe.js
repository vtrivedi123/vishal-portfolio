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
        <div class="timeline">

                  <div class="timeline-empty">
                  </div>

               <div class="timeline-middle">
                   <div class="timeline-circle"></div>
               </div>
               <div class="timeline-component timeline-content">
                <h3>2018</h3>
                <p>Microsoft Word</p>
                <p>Microsoft PowerPoint</p>
           </div>
                <div class="timeline-component timeline-content">
                         <h3>2019</h3>
                         <p>Microsoft Excel</p>
                         <p>Microsoft Excel Expert</p>
                </div>
                <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                <div class="timeline-empty">
                </div>

                <div class="timeline-empty">
                </div>

               <div class="timeline-middle">
                   <div class="timeline-circle"></div>
               </div>
               <div class=" timeline-component timeline-content">
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