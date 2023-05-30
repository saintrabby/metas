import { myAtoms } from '@/recoils/recoilRed'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const BlockChar = () => {

	const [myPos, setMyPos] = useRecoilState(myAtoms.CharPos)

	const ArrowCtrl = () => {
		
		onkeydown = (e) => {
			switch (e.key) {
				case 'ArrowUp':
					if (myPos.y < 19)
						setMyPos({ x: myPos.x, y: myPos.y + 1 });
					return;
				case 'ArrowDown':
					if (myPos.y > 0)
						setMyPos({ x: myPos.x, y: myPos.y - 1 });
					return;
				case 'ArrowLeft':
					if (myPos.x > 0)
						setMyPos({ x: myPos.x - 1, y: myPos.y });
					return;
				case 'ArrowRight':
					if (myPos.x < 19)
						setMyPos({ x: myPos.x + 1, y: myPos.y });
					return;
				default: return;
			}
		}

	}

	useEffect(() => {
		ArrowCtrl()
	}, [myPos.x, myPos.y])

	return (
		<div>{myPos.x}, {myPos.y}</div>
	)
}

export default BlockChar