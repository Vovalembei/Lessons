// function question() {
//     let pom = prompt('Enter the number')
//     const pom2 = prompt('Enter the number 2')
//         while (pom%pom2 === 0) {
//             console.log(pom/pom2);
//             pom = pom/pom2
//         }
// }
// question()
// const number1 = 5;
// const number2 = 10;

// function sum() {
//   console.log('gfdgsdfgsrgdxfgds');
// }
// sum();
//=========================================================================
// const number1 = 5;
// const y = 10;
// const z = 15;

// function multiply(x, y, z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// multiply(20, 10, 15);
//=========================================================================
// function multiply(x, y, z) {
//   console.log('Код до return виконується звичайним чином');

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log('Цей лог ніколи не виконається, він стоїть після return');
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550
//=========================================================================
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log('Лог до виклику функції multiply');
// multiply(2, 3, 5); // Результат множення дорівнює 30
// console.log('Лог після виклику функції multiply');

//=========================================================================
// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(2, 15, 2);
//=========================================================================

// const amount = Number(prompt('enter the amount'));
// const balance = 1000;

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведення операції введіть суму більшу за нуль');
//   } else if (amount > balance) {
//     console.log('Недостатньо коштів на рахунку');
//   } else {
//     console.log('Операція зняття коштів проведена успішно');
//   }
// }
// withdraw(amount, balance);

// const user = 'Mango';
// const message = 'Hello world';
//=============================================================================
// function hello(user, message) {
//   const hello = `${user} say ${message}`;
//   return hello;
// }
// console.log(hello(user, message));

// function fnA() {
//   console.log('Лог всередині функції fnA до виклику fnB');
//   fnB();
//   console.log('Лог всередині функції fnA після виклику fnB');
// }

// function fnB() {
//   console.log('Лог всередині функції fnB');
// }

// console.log('Лог до виклику fnA');
// fnA();
// console.log('Лог після виклику fnA');