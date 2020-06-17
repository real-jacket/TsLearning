function identity<T>(arg: T): T {
	return arg
}

let output = identity('s')

console.log(typeof output)

function loggingIdentity<T>(arg: T[]): T[] {
	console.log(arg.length)
	return arg
}
