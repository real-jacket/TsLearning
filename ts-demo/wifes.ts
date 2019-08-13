#!/usr/bin/env ts-node
{
    class Person {
        public wifes: Person[] = [];
        constructor(public name: string) { };
        sayhi(): void {
            console.log(`你好,${this.name}`)
        };
        addWife(wife: Person): void {
            this.wifes.push(wife);
        };
        introduceWife(): void {
            console.log('---my wifes are---')
            this.wifes.forEach((item, index) => {
                console.log(index + 1 + '--' + item.name)
            })
        };
    }

    let husband = new Person('jacke')
    let wife1 = new Person('思思')
    let wife2 = new Person('茜茜')
    let wife3 = new Person('圆圆')
    husband.addWife(wife1);
    husband.addWife(wife2);
    husband.addWife(wife3);
    husband.introduceWife();
}