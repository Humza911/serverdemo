//import {largeNum} from './script2.js'

let a;
if(1===1)
{
    const {largeNum} = await import ('./script2.js');
    a = largeNum;
}
const b = 8;

console.log(a,b);
