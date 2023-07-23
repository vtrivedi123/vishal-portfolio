import React from 'react';
import styled from 'styled-components';
import '../Component/Grid.css';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Change this line */
  grid-gap: 10px;
`;
const GridItem = styled.div`
  max-width: 100%;
  max-height: 200px;
`;

const PictureGrid = ({ images, texts }) => {
  return (
    <div className="grid-container">
      {images.map((imageUrl, index) => (
        <div className={`grid-item ${texts[index] === 'Microsoft Office' ? 'microsoft-office' : texts[index] === 'Node JS' ? 'node-js' : texts[index] === 'Java' ? 'java' : ''}`} key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
          <p>{texts[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;
