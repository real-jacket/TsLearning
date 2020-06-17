#!/usr/bin/env ts-node
{
	class Person {
		public wifes: Person[] = []
		constructor(public name: string) {}
		sayhi(): void {
			console.log(`你好,${this.name}`)
		}
		addWife(wife: Person): void {
			this.wifes.push(wife)
		}
		introduceWife(): void {
			console.log('---my wifes are---')
			this.wifes.forEach((item, index) => {
				console.log(index + 1 + '--' + item.name)
				if (item.wifes.length > 0) {
					item.wifes.forEach((item, index) => {
						console.log(`   son：${item.name}`)
					})
				}
			})
		}
	}

	let husband = new Person('jacke')
	let wife1 = new Person('思思')
	let wife2 = new Person('茜茜')
	let wife3 = new Person('圆圆')
	let son1 = new Person('小木')
	let son2 = new Person('小可')
	let son3 = new Person('小ke')
	wife1.addWife(son1)
	wife1.addWife(son2)
	wife2.addWife(son2)
	wife3.addWife(son3)
	husband.addWife(wife1)
	husband.addWife(wife2)
	husband.addWife(wife3)
	husband.introduceWife()
}
