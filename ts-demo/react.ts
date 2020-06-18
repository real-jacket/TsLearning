import * as React from 'react'

interface Person {
	name: string
	age: number
}

const a = function (p: Person) {
	console.log(p)
}

export default a

declare module 'react' {
	const xxx: number
}

console.log(React.xxx)
