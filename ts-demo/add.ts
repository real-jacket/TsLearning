#!/usr/bin/env ts-node
let a: number = parseInt(process.argv[2])
let b: number = parseInt(process.argv[3])

if (isNaN(a) || isNaN(b)) {
	console.log('输入了不能转化成数字的参数')
	process.exit(1)
}

console.log(a + b)
process.exit(0)
