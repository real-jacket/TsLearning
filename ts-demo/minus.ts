#!/usr/bin/env ts-node
let c: number = parseInt(process.argv[2]);
let d: number = parseInt(process.argv[3]);

if (isNaN(c) || isNaN(d)) {
    console.log('输入了不能转化成数字的参数');
    process.exit(1);
}

console.log(c - d);
process.exit(0);