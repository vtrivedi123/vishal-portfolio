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

const PictureGrid = ({ images, texts }) => { // Pass the 'texts' prop along with 'images'
  return (
    <div className="grid-container">
      {images.map((imageUrl, index) => (
        <div className="grid-item" key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} />
          <p>{texts[index]}</p> {/* Add the text inside the box */}
        </div>
      ))}
    </div>
  );
};

export default PictureGrid;