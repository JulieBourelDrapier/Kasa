import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.section`
position: relative;
display: flex;

@media (min-width: 768px) {
  text-align: center;
  justify-content: center;
  // margin: 7px 70px;
}
`;

const BannerImage = styled.img`
  width: 100%;
  border-radius: 10px;
  filter: brightness(65%);
  max-height: 111px;

  @media (min-width: 768px) {
   max-height: 170px;
   border-radius: 20px; 
  }

  @media (min-width: 1200px) {
    border-radius: 25px;
    max-height: 223px;
  }
`;

const BannerTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  padding-left: 16px;
  padding-top: 20px;
  width: 57%;
  position: absolute;
 
  @media (min-width: 768px) {
    width: 100%;
    padding-top: 34px;
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    font-size: 48px;
  }
`;

function Banner(props) {
  return (
      <BannerContainer>
        <BannerImage src={props.image} alt="Paysage de fond" />
        <BannerTitle>{props.title}</BannerTitle>
      </BannerContainer>
  );
}

export default Banner;
