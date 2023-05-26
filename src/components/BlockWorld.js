import React from 'react'
import styled from 'styled-components'

const BlockWorld = () => {

	console.log('hi BlockWorld!')

	return (
		<BlockWrap>
			<Block key={1}>{1}</Block>
		</BlockWrap>
	)
}

export default BlockWorld



const BlockWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 640px;
  height: 640px;
`

const Block = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid grey;
	display: flex;
	align-items: center;
	justify-content: center;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`