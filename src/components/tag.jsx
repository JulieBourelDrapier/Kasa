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
  `

function Tag({name}){
  return (
     <TagItem>{name}</TagItem>
  )
}

export default Tag