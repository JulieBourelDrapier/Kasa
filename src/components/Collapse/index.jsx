import React, { useState } from 'react';
import styled from 'styled-components';
// import BigOpenArrow from '../../assets/largearrowtoopen.png';
import SmallOpenArrow from '../../assets/smallarrowtoopen.png';
import SmallCloseArrow from '../../assets/smallarrowtoclose.png';
// import BigOpenArrow from '../../assets/bigarrowtoopen.png';

const CollapseContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: Montserrat;

  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const CollapseHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ff6060;
  border-radius: 5px;
  height: 30px;

  @media (min-width: 768px) {
    padding-bottom: 10px;
  }
`

const CollapseTitle = styled.h2`
  color: #fff;
  padding-left: 20px;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  padding-top: 6px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
const CollapseArrow = styled.img` 
  width: auto;
  height: 23px; 
  padding-top: 4px;

  @media (min-width: 768px) {
    padding-right: 10px;
    padding-top: 10px;
  }
`

const CollapseContent = styled.p`
  background-color: rgba(246, 246, 246, 1);
  color: #ff6060;
  margin: 0;
  padding: 20px;
  font-size: 12px;
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`


function Collapse({ title, content }) {
  const [expanded, setExpanded] = useState(false);


  return (
    <CollapseContainer className="collapse">
      <CollapseHeader className="collapse-header" onClick={() => setExpanded(!expanded)}>
        <CollapseTitle>{title}</CollapseTitle>
        <CollapseArrow src={expanded ? SmallOpenArrow : SmallCloseArrow}></CollapseArrow>
      </CollapseHeader>
      {expanded && (
        <div className="collapse-content">
          <CollapseContent>{content}</CollapseContent>
        </div>
      )}
    </CollapseContainer>
  );
}

export default Collapse;