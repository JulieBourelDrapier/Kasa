import React from 'react';
import styled from 'styled-components';

const FigureContainer = styled.div`
`
const Figure = styled.figure`
width: 100%;
margin: 0;
margin-top: 27px;
position: relative;
display: flex;

@media (min-width: 768px) {
  text-align: center;
  justify-content: center;
  margin-bottom: 40px;
}
`;

const BannerImage = styled.img`

  @media (max-width: 768px) {
    max-height: 211px;
  }

  @media (min-width: 768px) {
    max-height: 423px;
  }
 
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`;

function Gallery(props) {
  return (
    <FigureContainer>
      <Figure>
        <BannerImage src={props.imgSrc} alt="Paysage de fond" />
      </Figure>
    </FigureContainer>
  );
}

export default Gallery;
