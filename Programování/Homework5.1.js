let input;
let total = 0;

while (input !== null) {
  input = prompt('enter the number');

  if (Number.isNaN(Number(input)) === true) {
    alert('Введите число , а не символы');
    input = 0;
  }

  total = total + Number(input); // total += Number(input);
}
alert(`Общая сумма чисел равна ${total}`);