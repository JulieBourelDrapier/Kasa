import React from 'react'
import Styled from 'styled-components'


const TagItem = Styled.p`
  background-color: rgb(255, 96, 96, 1);
  width: 84px;
  min-height: 18px;
  border-radius: 5px;
  color: #fff;
  font-size: 10px;	
  text-align: center;
  align-items: center; 
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 14px;
    min-width: 115px;
    height: 25px;
    border-radius: 10px;
    padding: 5px;
  }
  `

function Tag({name}){
  return (
     <TagItem>{name}</TagItem>
  )
}

export default Tag