import React from 'react';
import styled from 'styled-components';
import imageBanner from '../../assets/imagebanner.png';

const BannerWrapper = styled.figure`
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
    max-height: 111px;
  }

  @media (min-width: 768px) {
    max-height: 223px;
  }
 
  object-fit: cover;
  width: 100%;
  border-radius: 10px;

`;

const BannerText = styled.figcaption`
  background-color: #000;
  opacity: 0.5;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  font-size: 24px;
  font-weight: 500;
  font-family: Montserrat;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 52px;
  }

  @media (min-width: 768px) {
    padding-top: 111px;
    padding-bottom: 82px;
  }
`;

function Banner() {
  return (
    <BannerWrapper>
      <BannerImage src={imageBanner} alt="Paysage de fond" />
        <BannerText>Chez vous, partout et ailleurs.</BannerText>
    </BannerWrapper>
  );
}

export default Banner;
