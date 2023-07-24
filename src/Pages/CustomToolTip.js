import React from 'react';
import { Tooltip } from 'react-bootstrap';

const CustomTooltip = () => {
  return (
    <Tooltip id="custom-tooltip">
      <div style={{ backgroundColor: 'lightblue', padding: '5px 10px', borderRadius: '5px' }}>
        Custom Tooltip Content
      </div>
    </Tooltip>
  );
};

export default CustomTooltip;
