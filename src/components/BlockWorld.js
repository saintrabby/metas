import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { myAtoms } from '@/recoils/recoilRed'
import BlockChar from './BlockChar'

const BlockWorld = () => {

	const [recMap, setRecMap] = useRecoilState(myAtoms.myMap)
	const [myPos, setMyPos] = useRecoilState(myAtoms.CharPos)

	// console.log('hi BlockWorld!')

	const makingField = () => {
		let blocks = []

		for (let j = 19; j >= 0; j--) {
			for (let i = 0; i < 20; i++) {
				if (myPos.x === i && myPos.y === j)
					blocks.push(
						<Block
							style={{ backgroundColor: '#333' }}
							key={j * 20 + i}
							pos={{ x: i, y: j }}
							pass={true}
							onClick={(e) => console.log({ x: i, y: j })}
						/>)
				else
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
		makingField()
	}, [myPos.x, myPos.y])

	return (
		<BlockWrap>
			{recMap == [] ? <div>Loading</div> : recMap}
			<BlockChar />
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