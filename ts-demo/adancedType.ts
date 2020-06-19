interface A {
	name: string
	age: number
}

interface B {
	name: string
	grade: number
}

const CC: A & B = {
	name: 'aa',
	age: 12,
	grade: 10,
}

const ACC: A | B = {
	name: 'bb',
	age: 12,
	grade: 10,
}

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
	if (typeof n === 'string') {
		return n
	} else {
		return n()
	}
}

interface Course {
	category: 'task' | 'live'
}

const course: Course = {
	category: 'task',
}

type name = 'jack' | 'frank' | 'a' | 'b' | 'c'

const me: name = 'jack'

{
	function fn(this: string | void, n: string) {
		console.log(n)
		console.log(this + 'bb')
	}

	// ts 对 call 不做类型检查
	fn.call('aa', 'ss')
	fn.call({ a: '11' }, 1)
}
