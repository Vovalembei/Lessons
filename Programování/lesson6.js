// const clients = ['Mango', 'Poly', 'ajax'];

// clients[0] = 'apple';

//  console.log(clients[0]);
//  console.log(clients[1]);
// console.log(clients[2]);
// console.log(clients.length);
//=======================================================================

// const clients = ['Mango', 'Poly', 'Ajax', 54, 45, 54, 3];
// const lastArrayElement = clients.length - 1;
// console.log(clients[lastArrayElement]);
//========================================================================
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
//========================================================================
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }
//========================================================================

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
//========================================================================

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
//========================================================================

// const a = ['Mango'];
// const b = a;
// console.log(a); // ["Mango"]
// a.push('Poly');
// console.log(a);
// console.log(b);
//========================================================================

// const string = 'Mango';
// const splitString = string.split('');
// console.log(splitString);
// console.log(string);
//========================================================================

// const words = ['JavaScript', 'це', 'цікаво'];
// console.log(words.join('')); // "JavaScriptцецікаво"
// console.log(words.join(' ')); // "JavaScript це цікаво"
// console.log(words.join('-')); // "JavaScript-це-цікаво"
//========================================================================
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1
//========================================================================
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false
//========================================================================
// const numbers = [1, 2, 4, 5];
// numbers.pop();
// console.log(numbers);
//========================================================================

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(0, 4));
//========================================================================
// const scores = [1, 2, 3, 4, 5];

// const deletedScores = scores.splice(1, 3);

// console.log(scores); // [4, 5]

// console.log(deletedScores); // [1, 2, 3]
//========================================================================
// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple');
// console.log(colors); // ["red", "green", "purple", "blue"]
//========================================================================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]
//========================================================================
// const numbers = [5, 5, 4, 2, 6, 7, 65];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   total = total + number;
// }
// console.log(total);
//========================================================================
// const numbers = [5, 5, 4, 2, 6, 7, 65];
// const total = numbers.reduce((acc, currentValue) => {
//   return (acc += currentValue);
// }, 0);
// console.log(total);
