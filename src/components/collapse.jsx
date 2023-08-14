import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';



const CollapseContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 80%;
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
  cursor: pointer;

  @media (min-width: 768px) {
    padding-bottom: 10px;
  }
`

const CollapseTitle = styled.h2`
  color: #fff;
  padding-left: 10px;
  font-size: 13px;
  margin: 0;
  padding-top: 6px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const CollapseArrow = styled(FontAwesomeIcon)` 
  width: auto;
  height: 23px; 
  position: relative;
  right: 25px;
  top: 8px;
  color: #fff;
  transition: transform 2s ease;

  
`

const CollapseContent = styled.p`
  background-color: rgba(246, 246, 246, 1);
  color: #ff6060;
  margin: 0;
  padding: 20px;
  font-size: 12px;

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
        <CollapseArrow src={FontAwesomeIcon} icon={faAngleUp} expanded={expanded} rotation={expanded ? 180 : 0}/>      
      </CollapseHeader>
      {expanded && (
        <div className="collapse-content">
          <CollapseContent expanded={expanded}>{content}</CollapseContent>
        </div>
      )}
    </CollapseContainer>
  );
}

export default Collapse;