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
const map = {};
for(let i=0; i< right.length; i++){
    if(!map[right[i]]){
        map[right[i]] = 1;
    }else{
        map[right[i]]  = map[right[i]] + 1;
    }
}
console.log(left);
console.log(right)
let sum = 0;
const n = left.length;
for(let num of left){
    sum += num * (parseInt(map[num]) || 0);
}
console.log('sum', sum)