import React from 'react';
import styled from 'styled-components';
import '../Component/Grid.css';

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const GridItem = styled.div`
  max-width: 100%;
  max-height: 200px;
`;

const PictureGrid = ({ images }) => {
  return (
    <div className="grid-container"> {/* Use the 'grid-container' class */}
      {images.map((imageUrl, index) => (
        <div className="grid-item" key={index}> {/* Use the 'grid-item' class */}
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;