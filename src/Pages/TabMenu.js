import React, { useState } from 'react';
import '../Component/TabMenu.css'

const TabMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="tab-menu-container">
      <div className="tab-menu">
        <ul className="tabs">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === activeTab ? 'active' : ''}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={tab.id === activeTab ? 'tab-pane active' : 'tab-pane'}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;