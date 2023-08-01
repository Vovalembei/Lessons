// function logItems(params) {
//     console.log('items');
// }
// console.log(logItems);
//==============================================================
// Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
//   }
// function registerGuest(name, greet) {
//     console.log(`Реєструємо гостя ${name}.`);
//     greet(name);
//   }
  
//   registerGuest("аіваів", greet);
//=====================================================================
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }


// registerGuest('Mango', function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// });
// registerGuest("Полі", function notify(name) {
//     console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
//   });
//==========================================================================
// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Імітуємо доступність абонента випадковим числом
//     const isRecipientAvailable = true;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//     // Логіка запису голограми
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Полі", takeCall, leaveHoloMessage);
//=========================================================================
// function logNumbers(number) {
//     console.log(number);
// }
// function logx2Numbers(number) {
//     console.log(number*2);
// }
// function repeat(n, action) {
//     for (let i = 0; i <= n; i += 1) {
//       action(i);
//     }
//   }
// repeat(100, logx2Numbers)
//==========================================================================

// const users = ['Mango', 'Poly', 'Ajax']
// // for (const user of users) {
// //     console.log(user);
// // }
// users.forEach((user) => {
//     console.log(user );
// } )
// users.forEach((number, index) => {
//     console.log(number, index);
// })

//==========================================================================
// const a = 5 
// const b = 6
// // function sum(a, b) {
// //     return a+b
// // }
// const sum = (a, b) => {
//     return a+b
// }
// console.log(sum(a,b));
//=============================================================================
// const users = ['Mango', 'Poly', 'Ajax']
// const upperUsers = users.map((user) => {
//  return user.toUpperCase()
// }
// )
// console.log(upperUsers);
//=================================================================================
// const array = [['Mango','Poly'], ['Ajax', 'Congo']]
// const flatArray = array.flatMap(friend => friend)
// console.log(flatArray);
//================================================================================
const numbers = [57, 54,67,53,23,6,4,56,32,643,]
const filteredNumbers = numbers.filter(number => number > 500)
console.log(filteredNumbers);