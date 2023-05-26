import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { myAtoms } from '@/recoils/recoilRed'

const BlockWorld = () => {

	const [recMap, setRecMap] = useRecoilState(myAtoms.myMap)

	console.log('hi BlockWorld!')

	const makingField = () => {
		let blocks = []

		for (let j = 19; j >= 0; j--) {
			for (let i = 0; i < 20; i++) {
				blocks.push(
					<Block
						key={j * 20 + i}
						pos={{ x: i, y: j }}
						pass={true}
						onClick={(e) => console.log({ x: i, y: j })}
					/>)
			}
		}

		setRecMap(blocks)
	}

	useEffect(() => {
		if (recMap.length === 0)
			makingField()
	}, [])

	return (
		<BlockWrap>
			{recMap == [] ? <div>Loading</div> : recMap}
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