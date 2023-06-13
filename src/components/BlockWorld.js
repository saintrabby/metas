import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { myAtoms } from '@/recoils/recoilRed'
import BlockChar from './BlockChar'
import Image from 'next/image'
// import { get, onValue, ref } from 'firebase/database'

import slime1 from '../pic/1-1.png'
import { ref, set } from 'firebase/database'
import { realDB } from '@/firedb/fireConfig'

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
							key={j * 20 + i}
							pos={{ x: i, y: j }}
							pass={true}
							onClick={(e) => console.log({ x: i, y: j })}
						>
							<Image src={slime1} alt='testpic' priority={true} />
						</Block>)
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

	const butt = () => {
		let chats = [
			{ anik: 'user', bmsg: 'hi' },
			{ anik: 'user', bmsg: 'hello' },
		]

		set(ref(realDB, `/fbmt/chat`), chats)
	}

	useEffect(() => {
		makingField()

		// return () => {
		// 	let dbref = ref(realDB)
		// 	remove(ref(realDB, 'fbch/ids/' + idnumber))
		// 	off(dbref)
		// }
	}, [myPos.x, myPos.y])

	return (
		<BlockWrap>
			{recMap == [] ? <div>Loading</div> : recMap}
			<BlockChar />

			<button onClick={butt} style={{ width: '100px', height: '20px', marginLeft: '32px' }}>butt</button>
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

  width: 600px;
  height: 600px;
`

const Block = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #222;
	display: flex;
	align-items: center;
	justify-content: center;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`