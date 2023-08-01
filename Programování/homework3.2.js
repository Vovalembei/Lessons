const x= prompt('1 number')
const y= prompt('2 Number')
console.log(x / y);
console.log(x % y);
const validNumber=Number(x)
const validNumber2=Number(y)
if(Number.isNaN(validNumber2)){
const letter2="please enter the number"
console.log(letter2);
}
if(x % y === 0){
const wrong = 'false'
console.log(wrong);
}else{
const right= 'true'
console.log(right);
}