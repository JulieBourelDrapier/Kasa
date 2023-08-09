import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.section`
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
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  filter: brightness(70%);
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
  font-family: Montserrat;
  font-weight: 500;
  padding-left: 50px;
  width: 62%;
  position: absolute;
  top: 35%;
  left: 28%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 100%;
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    font-size: 48px;
    padding-top: 78px;
    padding-bottom: 77px;
    text-align: center;
    top: 34%;
    left: 45%;
    transform: translate(-50%, -50%);
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
