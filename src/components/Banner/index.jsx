import React from 'react';
import styled from 'styled-components';
import imageBanner from '../../assets/imagebanner.png';

const BannerWrapper = styled.figure`
  margin: 0;
  margin-top: 27px;
  position: relative;
`;

const BannerImage = styled.img`
  max-height: 111px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`;

const BannerText = styled.figcaption`
  border-radius: 10px;
  position: absolute;
  top: 0;
  padding: 26px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 24px;
  font-weight: 500;
  font-family: Montserrat;
  color: #fff;
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
