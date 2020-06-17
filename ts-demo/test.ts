let _a = 1
let _c = 2
debugger
function fn() {
	let b = 1
	debugger
	console.log(_a)
}
fn()

let x = 1
let y = 2
debugger
function add({ x, y }: { x: number; y: number }): number {
	console.log(x, y)
	console.log(arguments)
	debugger
	console.log(this)
	let c = this.x + this.y
	return x + y
}
// add({ x, y })
let obj = { x: 3, y: 9, add }
var aaa = 33
