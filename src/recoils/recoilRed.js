import { atom } from "recoil"

const myMap = atom({
	key: 'mymap',
	default: [],
})



export const myAtoms = {
	myMap,
}