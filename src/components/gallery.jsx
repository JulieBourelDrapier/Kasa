import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'
import LeftArrow from '../assets/left-arrow.png';	
import RightArrow from '../assets/right-arrow.png';
import SmallLeftArrow from '../assets/smallleftarrow.png';
import SmallRightArrow from '../assets/smallrightarrow.png';

const GalleryDiv = styled.div`
  position: relative;
`

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

@media (min-width: 768px) {
  content: url(${LeftArrow});
}
`
const RightArrowSlide = styled.img`
position: absolute;
right: 0;
margin: 15px;

@media (min-width: 768px) {
  content: url(${RightArrow});
}
`

function Gallery({imgSrc}) {
  const [indexGallery, setIndexGallery] = useState(0)

  return (
    <GalleryDiv>
       <LeftArrowSlide src={SmallLeftArrow} onClick={() => setIndexGallery(indexGallery - 1 >= 0 ? indexGallery - 1 : imgSrc.length - 1 )}/>
       <RightArrowSlide src={SmallRightArrow} onClick={() => setIndexGallery(indexGallery + 1 < imgSrc.length ? indexGallery + 1 : 0 )}/>
       <Slides src={imgSrc[indexGallery]} alt="Photos du logement sélectionné" />
       <p>{indexGallery + 1}/{imgSrc.length}</p>
    </GalleryDiv>
  );
}

export default Gallery;
