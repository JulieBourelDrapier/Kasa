import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.section`
  position: relative;
  display: flex;
  
@media (min-width: 768px) {
  margin-bottom: 40px;
  text-align: center;
  justify-content: center;
}
`;

const BannerImage = styled.img`
  width: 100%;
  border-radius: 10px;
  filter: brightness(60%);
  height: 111px;

  @media (min-width: 768px) {
   height: 170px;
   border-radius: 20px; 
  }

  @media (min-width: 1200px) {
    border-radius: 25px;
    height: 223px;
  }
`;

const BannerTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  padding-left: 16px;
  padding-top: 15px;
  width: 57%;
  position: absolute;
 
  @media (min-width: 768px) {
    width: 100%;
    padding-top: 40px;
    font-size: 30px;
  }

  @media (min-width: 1200px) {
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
