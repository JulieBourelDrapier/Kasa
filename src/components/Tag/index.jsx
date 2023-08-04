import React from 'react'
import Styled from 'styled-components'

const TagContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: left;
  justify-content: space-around;
  gap: 15px;
`

const TagItem = Styled.p`
  background-color: rgb(255, 96, 96, 1);
  display: inline-block;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 25px;
  border-radius: 10px;
  color: #fff;	
  `

function Tag(){
  return (
      <TagContainer>
          <TagItem>{Tag}</TagItem>
      </TagContainer>
  )
}

export default Tag