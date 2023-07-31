import React from 'react';
import styled from 'styled-components';
import imageBanner from '../../assets/imagebanner.png';

const BannerWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const BannerImage = styled.img`
  width: 95%;
  max-height: 111px;
  border-radius: 10px;
  object-fit: cover;
  background-position: center;
`;

const BannerText = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: Montserrat;
  color: #fff;
  position: absolute;
  top: -50%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Banner() {
  return (
    <BannerWrapper id="banner">
      <BannerImage src={imageBanner} alt="Paysage de fond" />
      <BannerText>Chez vous, partout et ailleurs.</BannerText>
    </BannerWrapper>
  );
}

export default Banner;
