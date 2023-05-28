import { atom } from "recoil"

const myMap = atom({
	key: 'mymap',
	default: [],
})

const CharPos = atom({
	key: 'charpos',
	default: { x: 1, y: 1 },
})

const setPos = atom({
	key: 'setpos',
	default: (xy) => {
		console.log(xy)
		CharPos.default = { x: xy.x, y: xy.y }
		console.log(CharPos)
	}
})



export const myAtoms = {
	myMap,
	CharPos,
	setPos,
}