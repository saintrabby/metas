import { child, get, onValue, ref } from 'firebase/database'
import { realDB } from './fireConfig'

const fdbref = ref(realDB)

const Weeks = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
const Months = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12, }

const fbChat = () => {
	let Chatdat = []

	onValue(fdbref, async () => {
		Chatdat = get(child(fdbref, `/fbmt/chat`))
		console.log(Chatdat)

		// .then((res) => {
		// 	Chatdat = ('r : ', res.val())
		// 	return Chatdat
		// })
		// .catch((err) => console.log('e : ', err))
	})

	return Chatdat

	// let d = new Date(2023, 5, 6, 21, 18, 20)

	// let d = new Date().toString().match(/[^\s]+/g)

	// console.log(d[3], Months[d[1]], d[2], d[4])
}



export const myFB = {
	fbChat,
}