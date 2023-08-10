import React from 'react'
import Styled from 'styled-components'


const TagItem = Styled.p`
  background-color: rgb(255, 96, 96, 1);
  display: inline-block;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 25px;
  border-radius: 10px;
  color: #fff;	
  `

function Tag({name}){
  return (
     <TagItem>{name}</TagItem>
  )
}

export default Tag