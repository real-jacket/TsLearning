function identity<T>(arg: T): T {
	return arg
}

let output = identity('s')

console.log(typeof output)

function loggingIdentity<T>(arg: T[]): T[] {
	console.log(arg.length)
	return arg
}

let myIdentify: <T>(arg: T) => T = identity

interface GenericIdentityFn<T> {
	(arg: T): T
}

function identity1<T>(arg: T): T {
	return arg
}

let myIdentify1: GenericIdentityFn<number> = identity1

class GenericNumber<T> {
	zeroValue: T
	add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
	return x + y
}

console.log(myGenericNumber.add(2, 3))

interface LengthWise {
	length: number
}

function loggingIdentity1<T extends LengthWise>(arg: T): T {
	console.log(arg.length)
	return arg
}

loggingIdentity1({ length: 10 })

function create<T>(c: { new (): T }): T {
	return new c()
}

class BeeKeeper {
	hasMask: boolean
}

class ZooKeeper {
	nameTag: string
}

class AnimalA {
	numLegs: BeeKeeper
}

class Bee extends AnimalA {
	keeper: BeeKeeper
}

class Lion extends AnimalA {
	keeper: ZooKeeper
}

function createInstance<A extends AnimalA>(c: new () => A): A {
	return new c()
}

createInstance(Lion).keeper.nameTag
createInstance(Bee).keeper.hasMask
