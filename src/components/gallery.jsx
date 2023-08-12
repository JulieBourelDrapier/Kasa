import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'
import LeftArrow from '../assets/left-arrow.png';	
import RightArrow from '../assets/right-arrow.png';
import SmallLeftArrow from '../assets/smallleftarrow.png';
import SmallRightArrow from '../assets/smallrightarrow.png';

const GalleryDiv = styled.div`
  position: relative;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 470px;
`

const LeftArrowSlide = styled.img`
  position: absolute;
  left: 0;
  margin: 15px;
  cursor: pointer;

@media (min-width: 768px) {
  content: url(${LeftArrow});
}
`
const RightArrowSlide = styled.img`
  position: absolute;
  right: 0;
  margin: 15px;
  cursor: pointer;

@media (min-width: 768px) {
  content: url(${RightArrow});
}
`

const Slides = styled.img`
  width: 100%;
  border-radius: 10px;
  object-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  object-position: center;
  z-index: -1;

  
  @media (max-width: 768px) {
    max-height: 211px;
    border-radius: 25px;
  }

  @media (min-width: 768px) {
    max-height: 423px;
  }
`;
const SlideNumber = styled.p`
  position: absolute;
  color: #fff;
  bottom: 10px;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

function Gallery({imgSrc}) {
  const [indexGallery, setIndexGallery] = useState(0)

  return (
    <GalleryDiv>
       <LeftArrowSlide src={SmallLeftArrow} onClick={() => setIndexGallery(indexGallery - 1 >= 0 ? indexGallery - 1 : imgSrc.length - 1 )}/>
       <RightArrowSlide src={SmallRightArrow} onClick={() => setIndexGallery(indexGallery + 1 < imgSrc.length ? indexGallery + 1 : 0 )}/>
       <Slides src={imgSrc[indexGallery]} alt="Photos du logement sélectionné" />
       <SlideNumber>{indexGallery + 1}/{imgSrc.length}</SlideNumber>
    </GalleryDiv>
  );
}

export default Gallery;
