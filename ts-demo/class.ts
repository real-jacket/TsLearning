abstract class Animal {
	kind: string
	birth: string
	constructor(kind: string) {
		this.kind = kind
		if (kind === '哺乳动物') {
			this.birth = '胎生'
		} else {
			this.birth = '卵生'
		}
	}
	move(): void {
		console.log('move')
	}
	abstract say()
}

class Human extends Animal {
	name: string
	private _age: number
	get age() {
		return this._age
	}
	set age(value: number) {
		if (value < 0) {
			this._age = 0
		} else {
			this._age = value
		}
	}
	constructor(name: string, age: number) {
		super('哺乳动物')
		this.name = name
		this._age = age
	}
	say() {
		console.log('hello')
	}
}

let jack = new Human('jack', 18)
jack.age = -1
console.log(jack)
console.log(jack.age)
jack.move()

interface HumanInter {
	name: string
	age: number
}

let jackInter: HumanInter = {
	name: 'jack',
	age: 18,
}

console.log(jackInter)
