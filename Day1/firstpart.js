const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const data = input.split('\n');
console.log('data', data)
const left = [];
const right = [];

for(let pair of data){
    const [l, r] = pair.split('   ');
    left.push(l);
    right.push(r);
}
left.sort((a,b)=> a-b);
right.sort((a,b)=> a-b);

let sum = 0;
const n = left.length;
for(let i=0; i< n; i++){
    let first = parseInt(left.shift());
    let second = parseInt(right.shift());
    sum += Math.abs(second - first)
}
