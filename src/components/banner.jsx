import React from 'react';
import styled from 'styled-components';


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
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  filter: brightness(70%);
  max-height: 111px;

  @media (min-width: 768px) {
    border-radius: 25px;
    max-height: 223px;
  }
`;

const BannerText = styled.figcaption`
  color: #fff;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 500;
  padding-left: 50px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    font-size: 48px;
    padding-top: 111px;
    padding-bottom: 82px;
    text-align: center;
  }
`;

function Banner(props) {
  return (
      <Figure>
        <BannerImage src={props.image} alt="Paysage de fond" />
        <BannerText>{props.title}</BannerText>
      </Figure>
  );
}

export default Banner;
