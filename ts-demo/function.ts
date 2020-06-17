function add(x: number, y: number): number {
	return x + y
}

let myAdd: (baseValue: number, increment: number) => void = function (x: number, y: number): number {
	return x + y
}

let myAdd1: (baseValue: number, increment: number) => number = function (x, y) {
	return x + y
}

let myAdd2 = function (x: number, y: number): number {
	return x + y
}

function buildName(firstName: string, ...restOfName: string[]): string {
	return firstName + ' ' + restOfName.join('_')
}

let fullName = buildName('jack', 'a', 'b', 'c')
console.log(fullName)

let suits = ['heart', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }

function pickCard(x): any {
	if (typeof x === 'object') {
		let pickedCard = Math.floor(Math.random() * x.length)
		return pickedCard
	} else if (typeof x === 'number') {
		let pickedCard = Math.floor(x / 3)
		return { suit: suits[pickedCard], card: x % 3 }
	}
}

let myDeck = [
	{ suit: 'diamonds', card: 2 },
	{ suit: 'spades', card: 10 },
	{ suit: 'heart', card: 4 },
]

let pickCard1 = myDeck[pickCard(myDeck)]

console.log(pickCard1)

let pickCard2 = pickCard(2)

console.log(pickCard2)
