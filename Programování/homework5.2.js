let input;
input = prompt('Enter The Number')
for (let i = 1; i < input ; i+=2) {
  console.log(i); 
}
console.log('===========================================================');
for (let i = 2; i < input ; i+=2) {
    console.log(i);   
  }
  console.log('=========================================================');
  for (let i = 1; i < input; i++) {
    if (Number(input) % i === 0) {
      console.log(i);
    }
  }