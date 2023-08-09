import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'
import LeftArrow from '../assets/left-arrow.png';	
import RightArrow from '../assets/right-arrow.png';

const FigureContainer = styled.div`
`
// const Figure = styled.figure`
// width: 100%;
// margin: 0;
// margin-top: 27px;
// position: relative;
// display: flex;

// @media (min-width: 768px) {
//   text-align: center;
//   justify-content: center;
//   margin-bottom: 40px;
// }
// `;

const Slides = styled.img`

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

const LeftArrowSlide = styled.img`
position: absolute;
left: 0;
margin: 15px;
`
const RightArrowSlide = styled.img`
position: absolute;
right: 0;
margin: 15px;
`

function Gallery({imgSrc}) {
  const [indexGallery, setIndexGallery] = useState(0)

  return (
    <FigureContainer>
        <LeftArrowSlide src={LeftArrow} onClick={() => setIndexGallery(indexGallery - 1 >= 0 ? indexGallery - 1 : imgSrc.length - 1 )}/>
        <RightArrowSlide src={RightArrow} onClick={() => setIndexGallery(indexGallery + 1 < imgSrc.length ? indexGallery + 1 : 0 )}/>
        <Slides src={imgSrc[indexGallery]} alt="Photos du logement sélectionné" />
        <p>{indexGallery + 1}/{imgSrc.length}</p>
    </FigureContainer>
  );
}

export default Gallery;
