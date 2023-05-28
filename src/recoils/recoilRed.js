import { atom } from "recoil"

const myMap = atom({
	key: 'mymap',
	default: [],
})

const CharPos = atom({
	key: 'charpos',
	default: { x: 1, y: 1 },
})



export const myAtoms = {
	myMap,
	CharPos,
}